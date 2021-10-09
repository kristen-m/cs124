function TaskItem(props) {
    return <label className="task-item" hidden = {props.taskData.hidden} >
        <div>
            <input type="checkbox" className="check" defaultChecked={props.taskData.check} onClick={() => props.toggleCheckbox(props.taskData.id)}/>
            <span className="checkmark"></span>
            <input defaultValue={props.taskData.name} onChange={e => props.handleTaskNameChange(e, props.taskData.id)}></input>
        </div>
    </label>;
}

export default TaskItem;