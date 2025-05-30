import React, { Component } from "react";
import CreateNewModal from "./CreateNewBoard";
import NewColumnModal from "./NewColumnModal";
import AddNewTask from "./AddNewTask";
import EditBoard from "./EditBoard";
import Delete from "./DeleteBoard";
import Info from "./Info";
import TaskInfo from "./TasksInfo";
import Edit from "./EditTask";
import DeleteTask from "./DeleteTask";


class UnicModal extends Component {
    constructor(props) {
        super(props);
        this.modalRef = React.createRef();
        this.editref = React.createRef()
        this.state = {
            showEditTask: false
        }
    }

    EditDeleteTask = () => {
        this.setState((prevState) => ({
            showEditTask: !prevState.showEditTask
        }));
    };


    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }
    handleClickOutside = (event) => {
        if (this.modalRef.current && !this.modalRef.current.contains(event.target)) {
            this.props.onClose();
        }

        if (
            this.state.showEditTask &&
            this.editref.current &&
            !this.editref.current.contains(event.target) &&
            !event.target.classList.contains("three-dots")
        ) {
            this.setState({ showEditTask: false });
        }
    };


    render() {
        if (!this.props.isOpen) return null;

        let modalBody;

        switch (this.props.type) {
            case "create_new_board":
                modalBody = (
                    <CreateNewModal
                        activeBoardColumns={this.props.activeBoardColumns}
                        changeTheme={this.props.changeTheme}
                        inputChange={this.props.inputChange}
                        columnChange={this.props.columnChange}
                        addcolumn={this.props.addcolumn}
                        removeColumn={this.props.removeColumn}
                        createBoard={this.props.createBoard}
                        addNewBoard={this.props.addNewBoard}
                        columns={this.props.columns}
                        onClose={this.props.onClose}
                    />
                );
                break;

            case "new_column":
                modalBody = (
                    <NewColumnModal
                        columns={this.props.columns}
                        changeTheme={this.props.changeTheme}
                        onClose={this.props.onClose}
                        saveChangesEditBoard={this.props.saveChangesEditBoard}
                        board={this.props.board}
                    />
                );
                break;

            case "add_new_task":
                modalBody = (
                    <AddNewTask

                        changeTheme={this.props.changeTheme}
                        onClose={this.props.onClose}
                        task={this.props.task}
                        addTaskToColumn={this.props.addTaskToColumn}
                        activeBoardId={this.props.activeBoardId}
                        columns={this.props.columns}

                    />
                );
                break;
            case "edit_board":
                modalBody = (
                    <EditBoard

                        changeTheme={this.props.changeTheme}
                        board={this.props.board}
                        columns={this.props.columns}
                        saveChangesEditBoard={this.props.saveChangesEditBoard}
                        onClose={this.props.onClose}
                    />
                );
                break;
            case "delete_board":
                modalBody = (
                    <Delete
                        changeTheme={this.props.changeTheme}
                        onClose={this.props.onClose}
                        deleteBoard={this.props.deleteBoard}
                        deleteModal={this.props.deleteModal}
                        boardNameToDelete={this.props.boardNameToDelete}
                    />
                );
                break;
            case "info":
                modalBody = (
                    <Info
                        changeTheme={this.props.changeTheme}
                        onClose={this.props.onClose}
                    />
                );
                break;
            case "tasks-info":
                modalBody = (
                    <TaskInfo
                        changeTheme={this.props.changeTheme}
                        onClose={this.props.onClose}
                        task={this.props.task}
                        showEditTask={this.props.showEditTask}
                        showTaskEditDelete={this.props.showTaskEditDelete}
                        handleToggleSubtask={this.props.handleToggleSubtask}
                        handleStatusChange={this.props.handleStatusChange}


                    />
                );
                break;
            case "edit-task":
                modalBody = (
                    <Edit
                        changeTheme={this.props.changeTheme}
                        onClose={this.props.onClose}
                        task={this.props.task}
                        handleToggleSubtask={this.props.handleToggleSubtask}
                        saveTask={this.props.saveTask}

                    />
                );
                break;
            case "delete-task":
                modalBody = (
                    <DeleteTask
                        changeTheme={this.props.changeTheme}
                        onClose={this.props.onClose}
                        deleteTask={this.props.deleteTask}
                        task={this.props.task}
                        selectedTask={this.props.selectedTask}


                    />
                );
                break;

            default:
                modalBody = <p>Incorrect Modal Title...</p>;
        }

        return (
            <div className="task-modal">
                <div className={`task-inner-modal ${this.props.changeTheme ? 'dark-theme' : ''}  ${this.props.type === 'info' ? 'info-modal' : ''}`}
                    ref={this.modalRef}>
                    <div className="task-modal-header">
                        <h5>
                            {this.props.type === "create_new_board" && "Add New Board"}
                            {this.props.type === "new_column" && "Create Board Column"}
                            {this.props.type === "add_new_task" && "Add New Task"}
                            {this.props.type === "edit_board" && "Edit Board"}
                            {this.props.type === "tasks-info" && this.props.task?.title}
                            {this.props.type == "edit-task" && "Edit task"}
                            {this.props.type == "delete-task" && "Delete this task?"}

                        </h5>
                        {this.props.type === "tasks-info" && (
                            <div className="all-board position-relative">
                                <img
                                    onClick={this.EditDeleteTask}
                                    className="three-dots"
                                    style={{ position: 'absolute', right: 0, top: -13, cursor: 'pointer' }}
                                    src="https://kanban-task-management-app.netlify.app/static/media/icon-vertical-ellipsis.5c8996197d4a9dd7a7adfa20ce4abef9.svg"
                                />
                                {this.state.showEditTask && (
                                    <div className="mini-popup" ref={this.editref}>
                                        <p onClick={() => {
                                            this.setState({ showEditTask: false }, () => {
                                                this.props.ShowModal("edit-task", this.props.task);
                                            });
                                        }}>Edit Task</p>

                                        <p onClick={() => {
                                            this.setState({ showEditTask: false }, () => {
                                                this.props.ShowModal("delete-task", this.props.task);
                                            });
                                        }}>Delete Task</p>
                                    </div>
                                )}
                            </div>
                        )}


                    </div>
                    <div className="task-modal-body">
                        {modalBody}
                    </div>
                </div>
            </div>
        );
    }
}

export default UnicModal;
