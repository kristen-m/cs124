import TextField from '@mui/material/TextField';

function TaskListItem(props) {
    return <label className="task-list-item" >
        <div className="task-list-item">
            <TextField
                id="task-list-text-entry"
                variant="standard"
                placeholder="Click to Enter List Name"
                value={props.name}
                onChange={e => props.handleTaskNameChange(e, props.id)}
                disabled={props.checked}
                InputProps={{ disableUnderline: true,
                    style: { fontSize: 40,
                        background: "transparent",
                        marginTop:"10px",
                        paddingBottom:"10px",
                        fontFamily: "Futura",} }}
                multiline
            />
            <button type="button" className="open-task-list">Open></button>
        </div>
    </label>;
}

export default TaskListItem;
