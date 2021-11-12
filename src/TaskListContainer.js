import TaskListItem from './TaskListItem';

function TaskListContainer(props) {
    return <div id="task-list-container">
        {props.tasksData.map(e => <TaskListItem key={e.id} handleTaskNameChange={props.handleTaskNameChange} {...e}/>)}
    </div>;
}

export default TaskListContainer;