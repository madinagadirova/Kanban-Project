import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import UnicModal from "../modal/UnicModal";
import { Navigate } from "react-router-dom";
import Header from "./Header"
import Aside from "./Aside"
import Main from "./Main"


class Dashboard extends Component {
    constructor() {
        super();
        const platformId = uuidv4();
        const marketingId = uuidv4();
        const roadmapId = uuidv4();

        this.state = {
            changeTheme: false,
            hiddenSidebar: false,
            mobileDropdownOpen: false,
            boards: [
                { id: platformId, name: "Platform Launch" },
                { id: marketingId, name: "Marketing Plan" },
                { id: roadmapId, name: "Roadmap" }
            ],
            activeBoardId: platformId,
            showBoardDiv: false,
            showLogoutDiv: false,
            selectedModal: "",
            deleteModal: "",
            newBoardName: "",
            deleteTask: "",
            columns: {
                [platformId]: {
                    Todo: [
                        {
                            id: uuidv4(),
                            title: "Build UI for onboarding flow",
                            description: "",
                            subtasks: [
                                { id: uuidv4(), title: "Sign up page", isCompleted: false },
                                { id: uuidv4(), title: "Sign in page", isCompleted: false },
                                { id: uuidv4(), title: "Welcome page", isCompleted: false }
                            ],
                            createdAt: "2024-2-01"
                        },
                        {
                            id: uuidv4(),
                            title: "Build UI for search",
                            description: "",
                            subtasks: [
                                { id: uuidv4(), title: "Search page", isCompleted: false }
                            ],
                            createdAt: "2024-3-01"
                        },
                        {
                            id: uuidv4(),
                            title: "Build settings UI",
                            description: "",
                            subtasks: [
                                { id: uuidv4(), title: "Account page", isCompleted: false },
                                { id: uuidv4(), title: "Billing page", isCompleted: false }
                            ],
                            createdAt: "2024-4-01"
                        }
                    ],
                    Doing: [
                        {
                            id: uuidv4(),
                            title: "Design settings and search pages",
                            description: "",
                            subtasks: [
                                { id: uuidv4(), title: "Sign up page", isCompleted: true },
                                { id: uuidv4(), title: "Sign in page", isCompleted: false },
                                { id: uuidv4(), title: "Welcome page", isCompleted: false }
                            ],
                            createdAt: "2024-5-02"
                        },
                        {
                            id: uuidv4(),
                            title: "Add account management endpoints",
                            description: "",
                            subtasks: [
                                { id: uuidv4(), title: "Register API", isCompleted: true },
                                { id: uuidv4(), title: "Login API", isCompleted: false }
                            ],
                            createdAt: "2024-05-03"
                        },
                        {
                            id: uuidv4(),
                            title: "Add search endpoints",
                            description: "",
                            subtasks: [
                                { id: uuidv4(), title: "Add search endpoint", isCompleted: false },
                                { id: uuidv4(), title: "Define serach filters", isCompleted: false },
                            ],
                            createdAt: "2024-06-01"
                        }
                    ],
                    Done: [
                        {
                            id: uuidv4(),
                            title: "Conduct 5 wireframe tests",
                            description: "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
                            subtasks: [
                                { id: uuidv4(), title: "Complete 5 wireframe prototype tests", isCompleted: true },

                            ],
                            createdAt: "2024-07-01"
                        },
                        {
                            id: uuidv4(),
                            title: "Create wireframe prototype",
                            description: "Create a greyscale clickable wireframe prototype to test our asssumptions so far.",
                            subtasks: [
                                { id: uuidv4(), title: "Create clickable wireframe prototype in Balsamiq", isCompleted: true }
                            ],
                            createdAt: "2024-1-02"
                        },
                        {
                            id: uuidv4(),
                            title: "Review usability test results",
                            description: "Keep iterating through the subtasks until we're clear on the core concepts for the app.",
                            subtasks: [
                                { id: uuidv4(), title: "Meet to review notes from previous tests and plan changes", isCompleted: true },
                                { id: uuidv4(), title: "Make changes to paper prototypes", isCompleted: true },
                                { id: uuidv4(), title: "Conduct 5 usability tests", isCompleted: true }
                            ],
                            createdAt: "2024-12-03"
                        }
                    ]
                },

                [marketingId]: {
                    Todo: [
                        {
                            id: uuidv4(),
                            title: "Plan Product Hunt launch",
                            description: "",
                            subtasks: [
                                { id: uuidv4(), title: "Find Hunter", isCompleted: false },
                                { id: uuidv4(), title: "Gather assets", isCompleted: false },
                                { id: uuidv4(), title: "Draft product page", isCompleted: false },
                                { id: uuidv4(), title: "Notify network", isCompleted: false },
                                { id: uuidv4(), title: "Launch!", isCompleted: false },

                            ],
                            createdAt: "2024-12-04"
                        },
                        {
                            id: uuidv4(),
                            title: "Share on Show HN",
                            description: "",
                            subtasks: [
                                { id: uuidv4(), title: "Draft out HN post", isCompleted: false },
                                { id: uuidv4(), title: "Get feedback and refine", isCompleted: false },
                                { id: uuidv4(), title: "Publish post", isCompleted: false },
                            ],
                            createdAt: "2024-12-05"
                        },
                        {
                            id: uuidv4(),
                            title: "Write launch article",
                            description: "",
                            subtasks: [
                                { id: uuidv4(), title: "Write article", isCompleted: false },
                                { id: uuidv4(), title: "Publish on LinkedIn", isCompleted: false },
                                { id: uuidv4(), title: "Publish on Inndie Hackers", isCompleted: false },
                                { id: uuidv4(), title: "Publish on Medium", isCompleted: false },


                            ],
                            createdAt: "2024-06-06"
                        }
                    ],
                    Doing: [],
                    Done: []
                },

                [roadmapId]: {
                    Now: [
                        {
                            id: uuidv4(),
                            title: "Launch version one",
                            description: "",
                            subtasks: [
                                { id: uuidv4(), title: "Launch privately to our waitlist", isCompleted: false },
                                { id: uuidv4(), title: "Launch publicly on PH, HN, etc.", isCompleted: false },
                            ],
                            createdAt: "2024-12-23"
                        },
                        {
                            id: uuidv4(),
                            title: "Review early feedback and plan next steps for roadmap",
                            description: "Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.",
                            subtasks: [
                                { id: uuidv4(), title: "Interview 10 customers", isCompleted: false },
                                { id: uuidv4(), title: "Review common customer pain points and suggestions", isCompleted: false },
                                { id: uuidv4(), title: "Outline next steps for our roadmap", isCompleted: false },
                            ],
                            createdAt: "2025-12-02"
                        }
                    ],
                    Next: [],
                    Later: []
                }
            },
            newBoardColumns: ["Todo", "Doing", "Done"],
            show: false,
            modalTitle: "",
            contextMenuBoard: null,
            selectedTask: null

        };
    }



    toggleMobileDropdown = () => {
        this.setState(prev => ({ mobileDropdownOpen: !prev.mobileDropdownOpen }));
    };

    onDragEnd = (result) => {
        if (!result.destination) return;

        const { source, destination } = result;
        const activeBoardId = this.state.activeBoardId;
        const boardColumns = this.state.columns[activeBoardId];

        const sourceTasks = Array.from(boardColumns[source.droppableId]);
        const destTasks = Array.from(boardColumns[destination.droppableId]);

        if (source.droppableId === destination.droppableId) {
            const [moved] = sourceTasks.splice(source.index, 1);
            sourceTasks.splice(destination.index, 0, moved);
            this.setState(prev => ({
                columns: {
                    ...prev.columns,
                    [activeBoardId]: {
                        ...prev.columns[activeBoardId],
                        [source.droppableId]: sourceTasks
                    }
                }
            }));
        } else {
            const [moved] = sourceTasks.splice(source.index, 1);
            destTasks.splice(destination.index, 0, moved);
            this.setState(prev => ({
                columns: {
                    ...prev.columns,
                    [activeBoardId]: {
                        ...prev.columns[activeBoardId],
                        [source.droppableId]: sourceTasks,
                        [destination.droppableId]: destTasks
                    }
                }
            }));
        }
    };





    ShowModal = (type, task = null) => {
        this.setState({ show: true, modalTitle: type, selectedTask: task });
    };
    closeModal = () => this.setState({ show: false, modalTitle: "", selectedTask: null });

    componentDidMount() {
        const login = localStorage.getItem("login");
        if (login === "true") this.setState({ login: true });
        document.addEventListener("click", this.handleGlobalClick);
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.handleGlobalClick);
    }

    handleGlobalClick = (e) => {
        const isThreeDots = e.target.closest(".three-dots");
        const isMenu = e.target.closest(".dropdown-menu");
        const isLogoutPopup = e.target.closest(".mini-popup");
        const isProfileIcon = e.target.closest(".for-login");
        if (!isThreeDots && !isMenu && !isLogoutPopup && !isProfileIcon) {
            this.setState({ showBoardDiv: false, contextMenuBoard: null, showLogoutDiv: false });
        }
    };

    boardClick = (id) => this.setState({ activeBoardId: id });

    sidebarHide = () => this.setState((prev) => ({ hiddenSidebar: !prev.hiddenSidebar }));
    forTheme = () => this.setState((prev) => ({ changeTheme: !prev.changeTheme }));

    logOut = () => {
        localStorage.setItem("loggedIn", "false");
        window.location.href = "/login";
    };


    showLogOut = (id) => {
        this.setState((prev) => ({
            showLogoutDiv: prev.deleteModal !== id || !prev.showLogoutDiv,
            deleteModal: id
        }));
    };

    showBoardEditDelete = (id) => {
        this.setState((prev) => ({
            showBoardDiv: prev.deleteModal !== id || !prev.showBoardDiv,
            deleteModal: id
        }));
    };

    deleteBoard = () => {
        this.setState((state) => {
            const updatedBoards = state.boards.filter((b) => b.id !== state.deleteModal);
            const newActiveBoardId = state.activeBoardId === state.deleteModal
                ? updatedBoards[0]?.id || ""
                : state.activeBoardId;
            const newColumns = { ...state.columns };
            delete newColumns[state.deleteModal];

            return {
                boards: updatedBoards,
                activeBoardId: newActiveBoardId,
                columns: newColumns,
                showBoardDiv: false,
                deleteModal: ""
            };
        });
        this.closeModal();
    };

    changeColumnName = (index, e) => {
        const { newBoardColumns } = this.state;
        newBoardColumns[index] = e.target.value;
        this.setState({ newBoardColumns });
    };

    removeColumn = (index) => {
        const { newBoardColumns } = this.state;
        newBoardColumns.splice(index, 1);
        this.setState({ newBoardColumns });
    };

    addNewColumn = () => {
        this.setState((prevState) => ({
            newBoardColumns: [...prevState.newBoardColumns, ""],
        }));
    };

    addNewBoard = (boardName, columns) => {
        const id = uuidv4();
        const newBoard = { id, name: boardName };
        const newColumns = {};
        columns.forEach((col) => newColumns[col] = []);

        this.setState((prevState) => ({
            boards: [...prevState.boards, newBoard],
            columns: {
                ...prevState.columns,
                [id]: newColumns,
            },
            activeBoardId: id,
            showCreateNewModal: false
        }));
    };

    saveChangesEditBoard = (newName, updatedColumns) => {
        this.setState((prev) => {
            const updatedBoards = prev.boards.map((b) =>
                b.id === prev.activeBoardId ? { ...b, name: newName } : b
            );
            return {
                boards: updatedBoards,
                columns: {
                    ...prev.columns,
                    [prev.activeBoardId]: updatedColumns
                },
                showBoardDiv: false
            };
        });
    };


    handleToggleSubtask = (subtaskId) => {
        const { selectedTask, columns, activeBoardId } = this.state;


        const boardColumns = columns[activeBoardId];

        const updatedSubtasks = selectedTask.subtasks.map((subtask) =>
            subtask.id === subtaskId
                ? { ...subtask, isCompleted: !subtask.isCompleted }
                : subtask
        );

        const updatedTask = { ...selectedTask, subtasks: updatedSubtasks };

        const completedSubtasks = updatedSubtasks.filter((st) => st.isCompleted).length;

        const updatedColumns = { ...boardColumns };
        Object.keys(updatedColumns).forEach((columnKey) => {
            const updatedColumnTasks = updatedColumns[columnKey].map((task) =>
                task.id === selectedTask.id ? updatedTask : task
            );
            updatedColumns[columnKey] = updatedColumnTasks;
        });

        this.setState({
            columns: {
                ...columns,
                [activeBoardId]: updatedColumns,
            },
            selectedTask: updatedTask,
            completedSubtasks, 
        });
    };

    saveTask = (updatedTask) => {
        this.setState(prevState => {
            const newColumns = { ...prevState.columns };

          
            for (const boardId in newColumns) {
                const boardColumns = newColumns[boardId];

                for (const columnName in boardColumns) {
                    const tasks = boardColumns[columnName];

                    if (Array.isArray(tasks)) {
                        const taskIndex = tasks.findIndex(task => task.id === updatedTask.id);

                        if (taskIndex !== -1) {
                            boardColumns[columnName] = [
                                ...tasks.slice(0, taskIndex),
                                { ...tasks[taskIndex], ...updatedTask },
                                ...tasks.slice(taskIndex + 1)
                            ];
                        }
                    }
                }
            }

            return { columns: newColumns };
        }, this.closeModal);
    };
    deleteTask = (taskId) => {
        const newColumns = { ...this.state.columns };

        for (const boardId in newColumns) {
            const columnGroup = newColumns[boardId];
            for (const columnName in columnGroup) {
                columnGroup[columnName] = columnGroup[columnName].filter(
                    (task) => task.id !== taskId
                );
            }
        }

        this.setState({ columns: newColumns, show: false, selectedTask: null });
    };




    handleStatusChange = (newStatus) => {
        const { selectedTask, tasks } = this.state;
        const updatedTask = { ...selectedTask, status: newStatus };

        const updatedTasks = tasks.map((task) =>
            task.id === updatedTask.id ? updatedTask : task
        );

        this.setState({
            tasks: updatedTasks,
            selectedTask: updatedTask
        });
    };

    addTaskToColumn = (columnName, newTask) => {
        this.setState(prevState => {
            const activeBoardId = prevState.activeBoardId;
            const boardColumns = prevState.columns[activeBoardId] || {};
            const tasksInColumn = boardColumns[columnName] || [];

            const updatedBoardColumns = {
                ...boardColumns,
                [columnName]: [...tasksInColumn, newTask]
            };

            return {
                columns: {
                    ...prevState.columns,
                    [activeBoardId]: updatedBoardColumns
                }
            };
        });
    };



    render() {
        const {
            changeTheme, hiddenSidebar, boards, activeBoardId,
            columns, showBoardDiv, showLogoutDiv
        } = this.state;
        const themeClass = changeTheme ? "dark-theme" : "light-theme";
        const activeBoard = boards.find(b => b.id === activeBoardId);
        const boardToDelete = boards.find(b => b.id === this.state.deleteModal);




        if (this.state.login === false) {
            return <Navigate to="/login" />;
        }

        return (
            <div className={`dashboard-container ${themeClass} ${hiddenSidebar ? "sidebar-hidden" : ""}`}>
                <Header
                    boards={this.state.boards}
                    activeBoard={this.state.boards.find(b => b.id === this.state.activeBoardId)}
                    activeBoardId={this.state.activeBoardId}
                    changeTheme={this.state.changeTheme}
                    forTheme={this.forTheme}
                    showLogoutDiv={this.state.showLogoutDiv}
                    toggleLogoutDiv={() => this.setState({ showLogoutDiv: !this.state.showLogoutDiv })}
                    showLogOut={this.showLogOut}
                    logOut={this.logOut}
                    boardClick={this.boardClick}
                    ShowModal={this.ShowModal}
                    mobileDropdownOpen={this.state.mobileDropdownOpen}
                    toggleMobileDropdown={() => this.setState({ mobileDropdownOpen: !this.state.mobileDropdownOpen })}
                />

                <Aside
                    hiddenSidebar={this.state.hiddenSidebar}
                    boards={this.state.boards}
                    activeBoardId={this.state.activeBoardId}
                    showBoardDiv={this.state.showBoardDiv}
                    changeTheme={this.state.changeTheme}
                    sidebarHide={this.sidebarHide}
                    ShowModal={this.ShowModal}
                    boardClick={this.boardClick}
                    forTheme={this.forTheme}
                    showBoardEditDelete={this.showBoardEditDelete}
                />


                <UnicModal
                    isOpen={this.state.show}
                    onClose={this.closeModal}
                    theme={changeTheme}
                    type={this.state.modalTitle}
                    addNewBoard={this.addNewBoard}
                    board={activeBoard}
                    columns={columns[activeBoardId]}
                    saveChangesEditBoard={this.saveChangesEditBoard}
                    deleteBoard={this.deleteBoard}
                    deleteModal={this.state.deleteModal}
                    boardNameToDelete={boardToDelete?.name}
                    task={this.state.selectedTask}
                    ShowModal={this.ShowModal}
                    handleToggleSubtask={this.handleToggleSubtask}
                    handleStatusChange={this.handleStatusChange}
                    saveTask={this.saveTask}
                    deleteTask={() => this.deleteTask(this.state.selectedTask?.id)}
                    selectedTask={this.state.selectedTask}
                    addTaskToColumn={this.addTaskToColumn}
                    activeBoardId={this.state.activeBoardId}
                    activeBoardColumns={this.state.columns[this.state.activeBoardId]}
                />

                <Main
                    columns={columns}
                    activeBoardId={activeBoardId}
                    ShowModal={this.ShowModal}
                    onDragEnd={this.onDragEnd}
                />

            </div>
        );
    }
}

export default Dashboard;















