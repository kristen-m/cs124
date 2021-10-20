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

// let data = [
//   {
//     id: 1,
//     name: "test",
//     checked: false
//   },
//   {
//     id: 2,
//     name: "test2",
//     checked: false
//   }
// ]

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
  // const [tasks, setTasks] = useState(data);
  const [showAlert, setShowAlert] = useState(false);
  const [currView, setCurrView] = useState("All Tasks");

  let query = db.collection('hilnels-hmc-tasks');
  const collection = db.collection('hilnels-hmc-tasks');

  if(currView === "All Tasks"){
    query = db.collection('hilnels-hmc-tasks');
  } else if (currView === "Completed Tasks") {
    query = db.collection('hilnels-hmc-tasks').where("checked", "==", true);
  } else {
    query = db.collection('hilnels-hmc-tasks').where("checked", "==", false);
  }
  const [value, loading, error] = useCollection(query);
  let data = []

  if (value) {
    data = value.docs.map(e => {return { ...e.data(), id: e.id }});
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
        let ids = data.map(e => {if (e.checked) return e.id});
        handleDeleteTasks(ids);
      } else if (option === "Uncompleted Tasks") {
        let ids = data.map(e => {if (!e.checked) return e.id});
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

  function makeNewItem() {
    const newId = generateUniqueID();
    collection.doc(newId).set({id: newId, name: "Click to Enter Task", checked: false})
  }

  return <div>
      {
        loading ? <div>Loading...</div> :
      <div className="App">
        <h2>Tasks</h2>
        {showAlert && <Alert onClose={toggleModal} onOK={() => deleteOrView("trash", currentDeleteOption)} dropdownOptions={dropdownOptions}>
          <div>
            Are you sure you want to delete these tasks?
          </div>
        </Alert>}
        <div className="buttons-and-tasks">
          <div className="menu-buttons-container">
            <div className="dropdown" id="new-item-button">
              <button type="button" className="menu-buttons" onClick={makeNewItem}>New Item</button>
            </div>
            {menuItems.map(e => <DropdownButton key={e.id} setCurrentDeleteOption={setCurrentDeleteOption}  toggleModal={toggleModal} tasksData={data} {...e} options={dropdownOptions} deleteOrView={deleteOrView}/>)}
          </div>
          <TaskContainer handleTaskNameChange={handleTaskNameChange} tasksData={data} toggleCheckbox={toggleCheckbox}/>
        </div>
      </div>
  }
  </div>;
}

export default App;
