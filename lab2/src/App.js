import logo from './logo.svg';
import './App.css';

let data = [
  {
    id: 0,
    name: "test",
    check: false
  },
  {
    id: 1,
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
    name: "view"
  },
  {
    id: "trash",
    name: "🗑",
  }
]

function DropdownButton(props) {
  return <div className="dropdown" id="view-button">
    <button className="menu-buttons">{props.name}<span className="small-triangle"> ▼ </span></button>
    <div className="dropdown-content">
      <a href="#">{props.items.option1}</a>
      <a href="#">{props.items.option2}</a>
      <a href="#">{props.items.option3}</a>
    </div>
  </div>;
}

function ButtonsAndTasks(props) {
  return <div className="buttons-and-tasks">
    {props.buttonData.map(e => <DropdownButton name={e.name} items={menuItems}/>)}
    <TaskContainer data={data}/>
  </div>
  }

function TaskContainer(props) {
  return <div id="task-container">
          {props.data.map( e => <TaskItem taskData = {e}/>)}
        </div>;
}

function TaskItem(props) {
  return <label className="task-item">
            <input type="checkbox" className="check"/>
              <span className="checkmark"></span>
              {props.taskData.name}
              <button className="edit" type="button">edit</button>
          </label>;
}

function App() {
  return (
    <div className="App">
      <ButtonsAndTasks buttonData={menuItems} items={dropdownOptions}/>
    </div>
  );
}

export default App;
