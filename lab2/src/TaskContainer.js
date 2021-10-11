import TaskItem from './TaskItem';

function TaskContainer(props) {
    return <div id="task-container">
        {props.tasksData.map(e => <TaskItem key={e.id} handleTaskNameChange={props.handleTaskNameChange} {...e} toggleCheckbox={props.toggleCheckbox}/>)}
    </div>;
}

export default TaskContainer;