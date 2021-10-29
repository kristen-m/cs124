function TaskItem(props) {
    return <label className="task-item" >
        <div>
            <input type="checkbox" className="check" defaultChecked={props.checked} onClick={() => props.toggleCheckbox(props.id)}/>
            <span className="checkmark"></span>
            <input defaultValue={props.name} onChange={e => props.handleTaskNameChange(e, props.id)}></input>
            <select name="Priority" id="priority">
                <option value="High">High</option>
                <option value="Medium">Med</option>
                <option value="Low">Low</option>
            </select>
        </div>
    </label>;
}

export default TaskItem;