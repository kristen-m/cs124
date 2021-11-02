import './App.css';
import {useState} from "react";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import Alert from "./Alert";
import DropdownButton from "./DropdownButton";
import TaskContainer from "./TaskContainer";
import {useCollection} from "react-firebase-hooks/firestore";
import firebase from "firebase/compat";

const firebaseConfig = {
    apiKey: "AIzaSyCd9qqxvMpEKpBzwfWcc2tlRFa6ICaLH_s",
    authDomain: "hmc-cs124-fa21-labs.firebaseapp.com",
    projectId: "hmc-cs124-fa21-labs",
    storageBucket: "hmc-cs124-fa21-labs.appspot.com",
    messagingSenderId: "949410042946",
    appId: "1:949410042946:web:0113b139a7e3cd1cc709db"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


let currentDeleteOption = "";

const dropdownOptions = {
    option1: "All Tasks",
    option2: "Completed Tasks",
    option3: "Uncompleted Tasks"
}

const menuItems = [
    {
        id: "view",
        name: "View"
    },
    {
        id: "trash",
        name: "🗑",
    }
]

function App() {
    const [sort, setSort] = useState("Date Created");
    const [showAlert, setShowAlert] = useState(false);
    const [currView, setCurrView] = useState("All Tasks");

    let query = db.collection('hilnels-hmc-tasks');
    const collection = db.collection('hilnels-hmc-tasks');

    if (currView === "All Tasks") {
        if (sort === "Name: A to Z") {
            query = db.collection('hilnels-hmc-tasks').orderBy("name", "desc");
        } else if (sort === "Name: Z to A") {
            query = db.collection('hilnels-hmc-tasks').orderBy("name", "asc");
        } else if (sort === "Priority: High to Low") {
            query = db.collection('hilnels-hmc-tasks').orderBy("priority", "desc");
        } else if (sort === "Priority: Low to High") {
            query = db.collection('hilnels-hmc-tasks').orderBy("priority", "asc");
        } else {
            query = db.collection('hilnels-hmc-tasks').orderBy("created", "asc");
        }

        query.orderBy("created", "asc");
    } else if (currView === "Completed Tasks") {
        query = db.collection('hilnels-hmc-tasks').where("checked", "==", true);
    } else {
        query = db.collection('hilnels-hmc-tasks').where("checked", "==", false);
    }

    const [value, loading, error] = useCollection(query);
    let data = []

    if (value) {
        data = value.docs.map(e => {
            return {...e.data(), id: e.id}
        });
        data = data.reverse();
    }

    function toggleModal() {
        setShowAlert(!showAlert);
    }

    function setCurrentDeleteOption(currDelete) {
        currentDeleteOption = currDelete;
    }

    function handleTaskNameChange(e, id) {
        // let taskIndex = tasks.findIndex(e => e.id === id);
        // tasks[taskIndex].name = e.target.value
        // console.log(tasks)
        // setTasks(tasks);

        collection.doc(id).update({name: e.target.value});

    }

    function toggleCheckbox(id) {
        console.log("in toggle checkbox")
        const oldChecked = data.find(e => e.id === id).checked;
        console.log(oldChecked);
        collection.doc(id).update({checked: !oldChecked})
    }

    function handleDeleteTasks(ids) {
        ids.forEach(id => db.collection('hilnels-hmc-tasks').doc(id).delete());
    }

    function deleteOrView(id, option) {
        if (id === "trash") {
            if (option === "All Tasks") {
                let ids = data.map(e => e.id);
                handleDeleteTasks(ids);
            } else if (option === "Completed Tasks") {
                let ids = data.map(e => {
                    if (e.checked) return e.id
                });
                handleDeleteTasks(ids);
            } else if (option === "Uncompleted Tasks") {
                let ids = data.map(e => {
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

    function showTask(task) {
        return ((currView === "All Tasks") || (currView === "Completed Tasks" && task.checked) || (currView === "Uncompleted Tasks" && !task.checked))
    }

    function updatePriority(id, priority) {
        collection.doc(id).update({priority: priority})
    }

    // a is highest priority
    function makeNewItem() {
        const newId = generateUniqueID();
        collection.doc(newId).set({
            id: newId,
            name: "",
            checked: false,
            priority: "c",
            created: firebase.database.ServerValue.TIMESTAMP
        })
    }

    function getNewSort() {
        console.log("In get new sort: " + document.getElementById("task-sorting").value);
        setSort(document.getElementById("task-sorting").value);
        console.log("Sort in get new sort: " + sort);
    }

    return <div>
        {
            loading ? <div>Loading...</div> :
                <div className="App">
                    <h2>Tasks</h2>
                    {showAlert && <Alert onClose={toggleModal} onOK={() => deleteOrView("trash", currentDeleteOption)}
                                         dropdownOptions={dropdownOptions}>
                        <div>
                            Are you sure you want to delete these tasks?
                        </div>
                    </Alert>}
                    <div className="buttons-and-tasks">
                        <div className="menu-buttons-container">
                            <div className="dropdown" id="new-item-button">
                                <button type="button" className="menu-buttons" onClick={makeNewItem}>New Item</button>
                            </div>
                            {menuItems.map(e => <DropdownButton key={e.id}
                                                                setCurrentDeleteOption={setCurrentDeleteOption}
                                                                toggleModal={toggleModal} tasksData={data} {...e}
                                                                options={dropdownOptions}
                                                                deleteOrView={deleteOrView}/>)}
                        </div>
                        {(currView === "All Tasks") && <div id="sorting-area">
<span>

<div id="sort">
<div id="sort-label">Sort By:</div>
<select name="sorting" id="task-sorting" onChange={e => setSort(e.target.value)}>
<option selected hidden>Sort By:</option>
<option value="Date Created" selected={"Date Created" === sort}>Date Created</option>
<option value="Name: A to Z" selected={"Name: A to Z" === sort}>Name: A to Z</option>
<option value="Name: Z to A" selected={"Name: Z to A" === sort}>Name: Z to A</option>
<option value="Priority: High to Low" selected={"Priority: High to Low" === sort}>Priority: High to Low</option>
<option value="Priority: Low to High" selected={"Priority: Low to High" === sort}>Priority: Low to High</option>
</select>
</div>
</span>
                        </div>}
                        <TaskContainer handleTaskNameChange={handleTaskNameChange} tasksData={data}
                                       toggleCheckbox={toggleCheckbox} updatePriority={updatePriority}/>
                    </div>
                </div>
        }
    </div>;
}

export default App;