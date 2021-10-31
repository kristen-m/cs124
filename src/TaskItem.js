function TaskItem(props) {
    return <label className="task-item" >
        <div>
            <input type="checkbox" className="check" defaultChecked={props.checked} onClick={() => props.toggleCheckbox(props.id)}/>
            <span className="checkmark"></span>
            <input defaultValue={props.name} onChange={e => props.handleTaskNameChange(e, props.id)}></input>
            <select name="Priority" id="priority" onChange={e => props.updatePriority(props.id, e.target.value)}>
                <option value="High" selected= {"High"===props.priority}>High</option>
                <option value="Med" selected= {"Med"===props.priority}>Med</option>
                <option value="Low" selected= {"Low"===props.priority}>Low</option>
            </select>
        </div>
    </label>;
}

export default TaskItem;