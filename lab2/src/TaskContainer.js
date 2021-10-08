import TaskItem from './TaskItem';

function TaskContainer(props) {
    return <div id="task-container">
        {props.tasksData.map( e => <TaskItem taskData = {e} toggleCheckbox={props.toggleCheckbox}/>)}
    </div>;
}

export default TaskContainer;