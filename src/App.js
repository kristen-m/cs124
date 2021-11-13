import './App.css';
import {useState} from "react";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import Alert from "./Alert";
import DropdownButton from "./DropdownButton";
import TaskContainer from "./TaskContainer";
import {useCollection} from "react-firebase-hooks/firestore";
import firebase from "firebase/compat";
import TaskListContainer from "./TaskListContainer";

const firebaseConfig = {
    apiKey: "AIzaSyDoJ20jLJgywuuBGKRGlcUQNH0abdUQ_Pw",
    authDomain: "task-list-91e71.firebaseapp.com",
    projectId: "task-list-91e71",
    storageBucket: "task-list-91e71.appspot.com",
    messagingSenderId: "786170287003",
    appId: "1:786170287003:web:00ac302dcd21562873073e",
    measurementId: "G-SS8R968F1Z"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


let currentDeleteOption = "";
let currTaskList = "v1-1636781833788-3753798932278";

const dropdownOptions = {
    option1: "All Tasks",
    option2: "Completed Tasks",
    option3: "Uncompleted Tasks"
}

const menuItems = [
    {
        id: "view",
        name: "View",
        arialabel: "view tasks"
    },
    {
        id: "trash",
        name: "🗑",
        arialabel: "delete tasks"
    }
]

function App() {
    const [sort, setSort] = useState("Date Created");
    const [showAlert, setShowAlert] = useState(false);
    const [currView, setCurrView] = useState("All Tasks");
    const [currPage, setCurrPage] = useState("home")

    let query = db.collection('hilnels-hmc-task-lists');
    const collection = db.collection('hilnels-hmc-task-lists');

    const [value, loading, error] = useCollection(query);
    let listData = []
    let taskData = []


    if (value) {
        listData = value.docs.map(e => {
            return {...e.data(), id: e.id}
        });
        // console.log(listData);
    }

    if (currTaskList !== "") {
        // do we need two different queries? one for the task lists and one for the current tasks?
        // Helppppp i think this is way more messy than it should be??
        let queryTasks = db.collectionGroup(currTaskList);
        const collectionTasks = db.collectionGroup(currTaskList);


        let taskData = []

        if (currView === "All Tasks") {
            if (sort === "Name: A to Z") {
                queryTasks = db.collection(currTaskList).orderBy("name", "desc");
            } else if (sort === "Name: Z to A") {
                queryTasks = db.collection(currTaskList).orderBy("name", "asc");
            } else if (sort === "Priority: High to Low") {
                queryTasks = db.collection(currTaskList).orderBy("priority", "desc");
            } else if (sort === "Priority: Low to High") {
                queryTasks = db.collection(currTaskList).orderBy("priority", "asc");
            } else {
                queryTasks = db.collection(currTaskList).orderBy("created", "asc");
            }
            queryTasks.orderBy("created", "asc");
        } else if (currView === "Completed Tasks") {
            queryTasks = db.collection('hilnels-hmc-tasks').where("checked", "==", true);
        } else {
            queryTasks = db.collection('hilnels-hmc-tasks').where("checked", "==", false);
        }

        if (sort === "Name: A to Z") {
            taskData = taskData.sort((a, b) => (a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : -1)
        } else if (sort === "Name: Z to A") {
            taskData = taskData.sort((a, b) => (a.name.toUpperCase() < b.name.toUpperCase()) ? 1 : -1)
        } else if (sort === "Date Created") {
            taskData = taskData.sort((a, b) => (a.created > b.created) ? 1 : -1)
        } else if (sort === "Priority: High to Low") {
            taskData = taskData.sort((a, b) => (a.priority > b.priority) ? 1 : -1)
        } else if (sort === "Priority: Low to High") {
            taskData = taskData.sort((a, b) => (a.priority < b.priority) ? 1 : -1)
        }

        if (value) {
            taskData = value.docs.map(e => {
                return {...e.data(), id: e.id}
            });
            // console.log(taskData);
        }
    }

    function toggleModal() {
        setShowAlert(!showAlert);
    }

    function togglePageView() {
        if (currPage === "home") {
            setCurrPage("list");
        } else {
            setCurrPage("home")
        }
    }

    function updateCurrTaskList(id) {
        currTaskList = id;
    }

    function setCurrentDeleteOption(currDelete) {
        currentDeleteOption = currDelete;
    }

    function handleTaskNameChange(e, id) {
        // collection.doc(id).update({name: e.target.value});
        collection.doc(currTaskList).collection("tasks").doc(id).update({name: e.target.value});
    }

    function handleTaskListNameChange(e, id) {
        collection.doc(id).update({name: e.target.value});
    }

    function toggleCheckbox(id) {
        const oldChecked = taskData.find(e => e.id === id).checked;
        collection.doc(id).update({checked: !oldChecked})
    }

    function handleDeleteTasks(ids) {
        ids.forEach(id => db.collection('hilnels-hmc-tasks').doc(id).delete());
    }

    function deleteOrView(id, option) {
        if (id === "trash") {
            if (option === "All Tasks") {
                let ids = taskData.map(e => e.id);
                handleDeleteTasks(ids);
            } else if (option === "Completed Tasks") {
                let ids = taskData.map(e => {
                    if (e.checked) return e.id
                });
                handleDeleteTasks(ids);
            } else if (option === "Uncompleted Tasks") {
                let ids = taskData.map(e => {
                    if (!e.checked) return e.id
                });
                handleDeleteTasks(ids);
            }
        }
        if (id === "view") {
            if (option === "All Tasks") {
                setCurrView("All Tasks")
            } else if (option === "Completed Tasks") {
                setCurrView("Completed Tasks")
            } else if (option === "Uncompleted Tasks") {
                setCurrView("Uncompleted Tasks")
            }
        }
    }

    function updatePriority(id, priority) {
        collection.doc(id).update({priority: priority})
    }

    // a is highest priority
    function makeNewItem() {
        // const newId = generateUniqueID();
        // collection.doc(newId).set({
        //     id: newId,
        //     name: "",
        //     checked: false,
        //     priority: "c",
        //     created: firebase.database.ServerValue.TIMESTAMP
        // })
        console.log("Tried making a new item");
        const newId = generateUniqueID();
        collection.doc(currTaskList).collection("tasks").doc(newId).set({
            id: newId,
            name: "",
            checked: false,
            priority: "c",
            created: firebase.database.ServerValue.TIMESTAMP
        });
        console.log("Current Task List is: "+currTaskList);
        console.log(collection.doc(currTaskList).collection("tasks"));
    }

    function makeNewTaskList() {
        const newId = generateUniqueID();
        collection.doc(newId).set({
            id: newId,
            name: "",
            taskCount: 0,
            created: firebase.database.ServerValue.TIMESTAMP
        })
    }

    return <div>
        {
            loading ? <div>Loading ... </div> :
                (currPage === "home") ?
                <div className="homepage">
                    <h2 className="start" tabIndex="0" aria-label="Tasks">Task Lists</h2>
                    <div className="dropdown" id="new-item-button" aria-label="create a new task">
                        <button type="button" className="new-list-button" onClick={makeNewTaskList}>New Task List
                        </button>
                    </div>
                    <TaskListContainer handleTaskListNameChange={handleTaskListNameChange} taskListData={listData} togglePageView={togglePageView} updateCurrTaskList={updateCurrTaskList}/>
                </div> :
            <div className="App">
                        <div className="buttons-and-tasks">
                            <div id="fixed-buttons">
                            {showAlert &&
                                <Alert onClose={toggleModal} onOK={() => deleteOrView("trash", currentDeleteOption)}
                                       dropdownOptions={dropdownOptions}>
                                    {(currentDeleteOption === "All Tasks") ? <div tabIndex="1">
                                            Are you sure you want to delete all {taskData.length} task(s)?
                                        </div> :
                                        (currentDeleteOption === "Uncompleted Tasks") ?
                                            <div tabIndex="1">
                                                Are you sure you want to
                                                delete {taskData.filter(e => !e.checked).length} uncompleted task(s)?
                                            </div> :
                                            <div tabIndex="1">
                                                Are you sure you want to
                                                delete {taskData.filter(e => e.checked).length} completed task(s)?
                                            </div>}
                                </Alert>}
                                <h2 className="start" tabIndex="0" aria-label="Tasks">{listData.find(e => e.id === currTaskList).name}</h2>
                                <div className="menu-buttons-container">
                                    <button type="button" id="back-button" className="menu-buttons" onClick={togglePageView}>⮐
                                    </button>
                                    <div className="dropdown" id="new-item-button" aria-label="create a new task">
                                        <button type="button" className="menu-buttons" onClick={makeNewItem}>New Item
                                        </button>
                                    </div>
                                    {menuItems.map(e => <DropdownButton key={e.id}
                                                                        aria-label="test5"
                                                                        setCurrentDeleteOption={setCurrentDeleteOption}
                                                                        toggleModal={toggleModal} tasksData={taskData} {...e}
                                                                        options={dropdownOptions}
                                                                        deleteOrView={deleteOrView}/>)}
                                </div>
                                {(currView === "All Tasks") &&
                                <div id="sorting-area">
                                    <span>
                                        <div id="sort">
                                            <div id="sort-label">Sort By:</div>
                                            <select name="sorting" id="task-sorting" aria-label="Sort tasks by"
                                                    onChange={e => setSort(e.target.value)}>
                                                <option selected hidden>Sort By:</option>
                                                <option value="Date Created"
                                                        selected={"Date Created" === sort}>Date Created</option>
                                                <option value="Name: A to Z"
                                                        selected={"Name: A to Z" === sort}>Name: A to Z</option>
                                                <option value="Name: Z to A"
                                                        selected={"Name: Z to A" === sort}>Name: Z to A</option>
                                                <option value="Priority: High to Low"
                                                        selected={"Priority: High to Low" === sort}>Priority: High to Low</option>
                                                <option value="Priority: Low to High"
                                                        selected={"Priority: Low to High" === sort}>Priority: Low to High</option>
                                            </select>
                                        </div>
                                    </span>
                                </div>}
                            </div>
                            <TaskContainer handleTaskNameChange={handleTaskNameChange} tasksData={taskData}
                                           toggleCheckbox={toggleCheckbox} updatePriority={updatePriority}/>
                        </div>
                    </div>
            }
    </div>;
}

export default App;