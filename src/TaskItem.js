import TextField from '@mui/material/TextField';

function TaskItem(props) {
    return <label className="task-item" >
        <div id={"task-color-" + props.priority + "-" + props.checked}
        >
            <input type="checkbox" className="check" defaultChecked={props.checked} onClick={() => props.toggleCheckbox(props.id)}/>
            <span className="checkmark"></span>
            {/*<input value={props.name} disabled={props.checked} placeholder="Click to Enter Task" onChange={e => props.handleTaskNameChange(e, props.id)}></input>*/}
            <TextField
                id="task-text-entry"
                placeholder="Click to Enter Task"
                value={props.name}
                onChange={e => props.handleTaskNameChange(e, props.id)}
                disabled={props.checked}
                InputProps={{ style: { fontSize: 40} }}
                multiline
            />
            <select name="Priority" id="priority" onChange={e => props.updatePriority(props.id, e.target.value)}>
                <option value="a" selected= {"a"===props.priority}>High</option>
                <option value="b" selected= {"b"===props.priority}>Med</option>
                <option value="c" selected= {"c"===props.priority}>Low</option>
            </select>
        </div>
    </label>;
}

export default TaskItem;
