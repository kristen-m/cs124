import TaskListItem from './TaskListItem';

function TaskListContainer(props) {
    return <div id="task-list-container">
        {props.taskListData.map(e => <TaskListItem key={e.id} deleteCurrPageView={props.deleteCurrPageView} handleTaskListNameChange={props.handleTaskListNameChange} {...e} togglePageView={props.togglePageView} updateCurrTaskList={props.updateCurrTaskList}/>)}
    </div>;
}

export default TaskListContainer;