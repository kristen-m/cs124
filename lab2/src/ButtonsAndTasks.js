import TaskContainer from './TaskContainer';
import DropdownButton from './DropdownButton';


function ButtonsAndTasks(props) {
    return <div className="buttons-and-tasks">
        <div className="menu-buttons-container">
            <div className="dropdown" id="new-item-button">
                <button type="button" className="menu-buttons" onClick={props.makeNewItem}>New Item</button>
            </div>
            {props.buttonData.map(e => <DropdownButton setCurrentDeleteOption={props.setCurrentDeleteOption} toggleModal={props.toggleModal} taskData={props.tasksData} id = {e.id} name={e.name} options={props.dropdownOptions} deleteOrView={props.deleteOrView}/>)}
        </div>
        <TaskContainer handleTaskNameChange={props.handleTaskNameChange} tasksData={props.tasksData} toggleCheckbox={props.toggleCheckbox}/>
    </div>
}

export default ButtonsAndTasks;