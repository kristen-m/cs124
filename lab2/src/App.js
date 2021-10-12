import './App.css';
import {useState} from "react";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import Alert from "./Alert";
import DropdownButton from "./DropdownButton";
import TaskContainer from "./TaskContainer";

let currentDeleteOption = "";

let data = [
  {
    id: 1,
    name: "test",
    checked: false
  },
  {
    id: 2,
    name: "test2",
    checked: false
  }
]

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
  const [tasks, setTasks] = useState(data);
  const [showAlert, setShowAlert] = useState(false);
  const [currView, setCurrView] = useState("All Tasks");

  function toggleModal() {
    setShowAlert(!showAlert);
  }

  function setCurrentDeleteOption(currDelete) {
    currentDeleteOption = currDelete;
  }

  function handleTaskNameChange(e, id) {
    console.log("handling task name change!")
    let taskIndex = tasks.findIndex(e => e.id === id);
    tasks[taskIndex].name = e.target.value
    console.log(tasks)
    setTasks(tasks);
  }

  function toggleCheckbox(id) {
    tasks.find(e => e.id === id).checked = !tasks.find(e => e.id === id).checked
  }

  function deleteOrView(id, option) {
    if (id === "trash") {
      if (option === "All Tasks") {
          setTasks([])
      } else if (option === "Completed Tasks") {
          let newTasks = tasks.filter(element => element.checked === false)
          setTasks(newTasks)
      } else if (option === "Uncompleted Tasks") {
          let newTasks = tasks.filter(element => element.checked === true)
          setTasks(newTasks)
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

  // function deleteOptions(id, option){
  //   if (id === "trash") {
  //     if (option === "All Tasks") {
  //       setTasks([])
  //     } else if (option === "Completed Tasks") {
  //       let newTasks = tasks.filter(element => element.checked === false)
  //       setTasks(newTasks)
  //     } else if (option === "Uncompleted Tasks") {
  //       let newTasks = tasks.filter(element => element.checked === true)
  //       setTasks(newTasks)
  //     }
  //   }
  // }
  //
  // function viewOptions(id, option) {
  //   if (id === "view") {
  //     if (option === "All Tasks") {
  //       setCurrView("All Tasks")
  //     } else if (option === "Completed Tasks") {
  //       setCurrView("Completed Tasks")
  //     } else if (option === "Uncompleted Tasks") {
  //       setCurrView("Uncompleted Tasks")
  //     }
  //   }
  // }

  function showTask(task) {
    return ((currView === "All Tasks") || (currView === "Completed Tasks" && task.checked) || (currView === "Uncompleted Tasks" && !task.checked))
  }

  function MakeNewItem() {
    setTasks([      {
      id: generateUniqueID(),
      name: "Enter Task",
      checked: false,
    },
      ...tasks]);
  }

  return (
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
              <button type="button" className="menu-buttons" onClick={MakeNewItem}>New Item</button>
            </div>
            {menuItems.map(e => <DropdownButton key={e.id} setCurrentDeleteOption={setCurrentDeleteOption}  toggleModal={toggleModal} tasksData={tasks} {...e} options={dropdownOptions} deleteOrView={deleteOrView}/>)}
          </div>
          <TaskContainer handleTaskNameChange={handleTaskNameChange} tasksData={tasks.filter(e => showTask(e))} toggleCheckbox={toggleCheckbox}/>
        </div>
      </div>
  );
}

export default App;
