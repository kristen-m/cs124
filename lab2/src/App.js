import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

let data = [
  {
    id: 1,
    name: "test",
    check: false
  },
  {
    id: 2,
    name: "test2",
    check: true
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

  function DeleteOrView(id, option) {
    if (id === "trash") {
      if (option === "All Tasks") {
        setTasks([])
      } else if (option === "Completed Tasks") {
        setTasks(tasks.filter(element => element.check === true))
      } else if (option === "Uncompleted Tasks") {
        setTasks(tasks.filter(element => element.check === false))
      }
    }
  }

  function DropdownButton(props) {
    return <div className="dropdown" id="view-button">
      <button className="menu-buttons">{props.name}<span className="small-triangle"> ▼ </span></button>
      <div className="dropdown-content">
        <button onClick={DeleteOrView(props.id, props.options.option1)}>{props.options.option1}</button>
        <button onClick={DeleteOrView(props.id, props.options.option2)}>{props.options.option2}</button>
        <button onClick={DeleteOrView(props.id, props.options.option3)}>{props.options.option3}</button>
      </div>
    </div>;
  }

  function MakeNewItem() {
    setTasks([      {
      id: generateUniqueID,
      name: "",
      checked: false
    },
      ...tasks])
  }

  function ButtonsAndTasks(props) {
    return <div className="buttons-and-tasks">
      <div className="menu-buttons-container">
        <div className="dropdown" id="new-item-button">
          <button type="button" className="menu-buttons" onClick={MakeNewItem}>New Item</button>
        </div>
        {props.buttonData.map(e => <DropdownButton name={e.name} options={dropdownOptions}/>)}
      </div>
      <TaskContainer data={tasks}/>
    </div>
  }

  function TaskContainer(props) {
    return <div id="task-container">
      {tasks.map( e => <TaskItem taskData = {e}/>)}
    </div>;
  }

  function TaskItem(props) {
    return <label className="task-item">
      <input type="checkbox" className="check"/>
      <span className="checkmark"></span>
      <span>{props.taskData.name}</span>
      <button className="edit" type="button">edit</button>
    </label>;
  }


  return (
      <div className="App">
        <div id="app-title"><h2>Tasks</h2>
        </div>
        <ButtonsAndTasks buttonData={menuItems}/>
      </div>
  );
}

export default App;
