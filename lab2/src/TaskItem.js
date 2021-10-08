function TaskItem(props) {
    return <label className="task-item" hidden = {props.taskData.hidden} >
        <input type="checkbox" className="check" defaultChecked={props.taskData.check} onClick={() => props.toggleCheckbox(props.taskData.id)}/>
        <span className="checkmark"></span>
        <span>{props.taskData.name}</span>
        <button className="edit" type="button">edit</button>
    </label>;
}

export default TaskItem;