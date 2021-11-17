import TaskListItem from './TaskListItem';

function TaskListContainer(props) {
    //read and sort task list data here :(
    return <div id="task-list-container">
        {props.taskListData.map(e => <TaskListItem key={e.id} toggleListModal={props.toggleListModal} updateDeleteListId={props.updateDeleteListId} handleTaskListNameChange={props.handleTaskListNameChange} {...e} togglePageView={props.togglePageView} updateCurrTaskList={props.updateCurrTaskList}/>)}
    </div>;
}

export default TaskListContainer;