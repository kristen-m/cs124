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
let currTaskList = "";

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
        id: "Delete",
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
    }
    // console.log("list data ", listData)

    if (currTaskList !== "" && listData !== []) {

        // console.log("in if, list data is ", listData)
        let currList = listData.find(e => e.id === currTaskList);
        // console.log("currListId is ", currTaskList)
        // console.log("currList is", currList)
        taskData = currList.tasks;
        // console.log(taskData)


        if (currView === "All Tasks") {
            if (sort === "Name: A to Z") {
                taskData = taskData.sort((a, b) => (a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : -1)
            } else if (sort === "Name: Z to A") {
                taskData = taskData.sort((a, b) => (a.name.toUpperCase() < b.name.toUpperCase()) ? 1 : -1)
            } else if (sort === "Priority: High to Low") {
                taskData = taskData.sort((a, b) => (a.priority > b.priority) ? 1 : -1)
            } else if (sort === "Priority: Low to High") {
                taskData = taskData.sort((a, b) => (a.priority < b.priority) ? 1 : -1)
            } else {
                taskData = taskData.sort((a, b) => (a.created > b.created) ? 1 : -1)
            }
        } else if (currView === "Completed Tasks") {
            taskData = taskData.filter(task => task.checked)
        } else {
            taskData = taskData.filter(task => !task.checked)
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
        //Maybe the issue with the tasks being sorted immediately is here??? Not sure :(
        taskData.find(task => task.id === id).name = e.target.value
        collection.doc(currTaskList).update({tasks: taskData});
    }

    function handleTaskListNameChange(e, id) {
        collection.doc(id).update({name: e.target.value});
    }

    // function toggleCheckbox(id) {
    //     const oldChecked = taskData.find(e => e.id === id).checked;
    //     collection.doc(id).update({checked: !oldChecked})
    // }

    function toggleCheckbox(id) {
        const oldChecked = taskData.find(e => e.id === id).checked;
        taskData.find(e => e.id === id).checked = !oldChecked
        collection.doc(currTaskList).update({tasks: taskData})
    }

    // function handleDeleteTasks(ids) {
    //     ids.forEach(id => db.collection('hilnels-hmc-tasks').doc(id).delete());
    // }

    function handleDeleteTasks(idList, option) {
        let ids = [];
        for (let i = 0; i <idList.length; i++) {
            ids.push(idList[i].id);
        }
        if(option === "All Tasks"){
            taskData = taskData.filter(task => task.id in ids);
        } else {
            taskData = taskData.filter(task => task && !checkIdInList(task.id, ids));
        }
        collection.doc(currTaskList).update({tasks: taskData});
    }

    function checkIdInList(id, idList){
        for (let i = 0; i < idList.length; i ++){
            if (id === idList[i]){
                return true;
            }
        }
    }

    function deleteCurrPageView(id) {
        db.collection('hilnels-hmc-task-lists').doc(id).delete();
    }

    function deleteOrView(id, option) {
        if (id === "trash") {
            if (option === "All Tasks") {
                let ids = taskData.map(e => e.id);
                handleDeleteTasks(ids, option);
            } else if (option === "Completed Tasks") {
                let ids = taskData.filter(e => {
                    if (e.checked) return e.id
                });
                handleDeleteTasks(ids, option);
            } else if (option === "Uncompleted Tasks") {
                let ids = taskData.filter(e => {
                    if (!e.checked) return e.id
                });
                handleDeleteTasks(ids, option);
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

    // function updatePriority(id, priority) {
    //     collection.doc(id).update({priority: priority})
    // }

    function updatePriority(id, priority) {
        taskData.find(e => e.id === id).priority = priority
        collection.doc(currTaskList).update({tasks: taskData})
    }

    function makeNewItem() {
        let currTaskListObject = db.collection('hilnels-hmc-task-lists').doc(currTaskList).get();
        const newId = generateUniqueID()
        let newTask = {
            id: newId,
            name: "",
            checked: false,
            priority: "c",
            created: firebase.database.ServerValue.TIMESTAMP
        }
        taskData.push(newTask);
        collection.doc(currTaskList).update({
            tasks: taskData
        });
    }

    function makeNewTaskList() {
        const newId = generateUniqueID();
        collection.doc(newId).set({
            id: newId,
            name: "",
            taskCount: 0,
            tasks: [],
            created: firebase.database.ServerValue.TIMESTAMP
        })
    }

    return <div>
        {
            loading ? <div>Loading ... </div> :
                (currPage === "home") ?
                <div className="homepage">
                    <h2 className="start" tabIndex="0" aria-label="Task Lists">Task Lists</h2>
                    <div>
                        <button type="button" className="new-list-button" onClick={makeNewTaskList} aria-label="Create a new task list">New Task List
                        </button>
                    </div>
                    <TaskListContainer deleteCurrPageView={deleteCurrPageView} handleTaskListNameChange={handleTaskListNameChange} taskListData={listData} togglePageView={togglePageView} updateCurrTaskList={updateCurrTaskList}/>
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
                                <h2 className="start" tabIndex="0" aria-label={listData.find(e => e.id === currTaskList).name}>{listData.find(e => e.id === currTaskList).name}</h2>
                                <div className="menu-buttons-container">
                                    <button type="button" id="back-button" className="menu-buttons" onClick={togglePageView} aria-label="Return to Task Lists Homepage">⮐
                                    </button>
                                    <div className="dropdown" id="new-item-button" aria-label="create a new task">
                                        <button type="button" className="menu-buttons" onClick={makeNewItem}>New Item
                                        </button>
                                    </div>
                                    {menuItems.map(e => <DropdownButton key={e.id}
                                                                        aria-label="HELLO????"
                                                                        setCurrentDeleteOption={setCurrentDeleteOption}
                                                                        toggleModal={toggleModal} tasksData={taskData} {...e}
                                                                        options={dropdownOptions}
                                                                        deleteOrView={deleteOrView}/>)}
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
                                    </div>
                                </div>
                            </div>
                            <TaskContainer handleTaskNameChange={handleTaskNameChange} tasksData={taskData}
                                           toggleCheckbox={toggleCheckbox} updatePriority={updatePriority}/>
                        </div>
                    </div>
            }
    </div>;
}

export default App;