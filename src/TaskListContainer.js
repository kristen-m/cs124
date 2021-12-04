import TaskListItem from './TaskListItem';

function TaskListContainer(props) {
    return <div id="task-list-container">
        {props.taskListData.map(e => {
            if (e === "sharedLists") {
                return <h2>Shared with Me</h2>
            } else {
                return <TaskListItem key={e.id} toggleListModal={props.toggleListModal}
                                     updateDeleteListId={props.updateDeleteListId}
                                     handleTaskListNameChange={props.handleTaskListNameChange} {...e}
                                     togglePageView={props.togglePageView}
                                     updateCurrTaskList={props.updateCurrTaskList}/>
            }
            })
        }
    </div>;
}

export default TaskListContainer;