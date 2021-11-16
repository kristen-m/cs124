import TextField from '@mui/material/TextField';

function TaskListItem(props) {
    return <label className="task-list-label" >
        <div className="task-list-item">
            <TextField
                id="task-list-text-entry"
                variant="standard"
                placeholder="Click to Enter List Name"
                value={props.name}
                onChange={e => props.handleTaskListNameChange(e, props.id)}
                disabled={props.checked}
                aria-label="Enter Task List Title"
                maxLength={10}
                InputProps={{ disableUnderline: true,
                    style: { fontSize: 40,
                        background: "transparent",
                        marginTop:"25px",
                        paddingBottom:"10px",
                        fontFamily: "Futura",} }}
            />
            <span id="homepage-action-buttons">
            <button type="button" aria-label={"Delete task list "+ props.name} className="task-list-options" onClick={() => (props.deleteCurrPageView(props.id), props.updateCurrTaskList(""))}>🗑</button>
            <button type="button" aria-label={"Enter task list "+ props.name} className="task-list-options" onClick={() => (props.togglePageView(), props.updateCurrTaskList(props.id))}>⮑</button>
            </span>
        </div>
    </label>;
}

export default TaskListItem;
