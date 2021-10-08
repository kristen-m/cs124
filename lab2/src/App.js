import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import ButtonsAndTasks from './ButtonsAndTasks';
import TaskItem from "./TaskItem";



let data = [
  {
    id: 1,
    name: "test",
    check: false,
    hidden: false
  },
  {
    id: 2,
    name: "test2",
    check: false,
    hidden: false
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
  const [checked, setChecked] = useState(tasks.filter(element => element.check === true));

  function hideTask(task, check) {
    if (task.check === check) {
      task.hidden = true;
    }
  }

  function toggleCheckbox(id) {
    tasks.find(e => e.id === id).check = !tasks.find(e => e.id === id).check
  }
  
  function deleteOrView(id, option) {
    if (id === "trash") {
      if (option === "All Tasks") {
        setTasks([])
      } else if (option === "Completed Tasks") {
        let newTasks = tasks.filter(element => element.check === false)
        setTasks(newTasks)
      } else if (option === "Uncompleted Tasks") {
        let newTasks = tasks.filter(element => element.check === true)
        setTasks(newTasks)
      }
    }
    if (id === "view") {
      console.log("tasks before", tasks)
      console.log(option)
      if (option === "All Tasks") {
        tasks.forEach(e => e.hidden = false)
        setTasks(tasks);
      } else if (option === "Completed Tasks") {
        tasks.forEach(e => hideTask(e, false))
        setTasks(tasks);
        console.log("tasks ", tasks)
        console.log("in completed")
       } else if (option === "Uncompleted Tasks") {
        tasks.forEach(e => hideTask(e, true))
        setTasks(tasks);
        console.log("tasks ", tasks)
        console.log("in uncompleted")

      }
    }
  }

  function MakeNewItem() {
    setTasks([      {
      id: generateUniqueID,
      name: "",
      checked: false,
      hidden: false
    },
      ...tasks])
  }

  return (
      <div className="App">
        <div id="app-title"><h2>Tasks</h2>
        </div>
        <ButtonsAndTasks toggleCheckbox={toggleCheckbox} deleteOrView={deleteOrView} tasksData={tasks} buttonData={menuItems} dropdownOptions={dropdownOptions} makeNewItem={MakeNewItem}/>
      </div>
  );
}

export default App;
