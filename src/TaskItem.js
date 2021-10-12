function TaskItem(props) {
    return <label className="task-item" >
        <div>
            <input type="checkbox" className="check" defaultChecked={props.checked} onClick={() => props.toggleCheckbox(props.id)}/>
            <span className="checkmark"></span>
            <input defaultValue={props.name} onChange={e => props.handleTaskNameChange(e, props.id)}></input>
        </div>
    </label>;
}

export default TaskItem;