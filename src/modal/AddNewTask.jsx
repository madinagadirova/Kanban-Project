import { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class AddNewTask extends Component {
    constructor(props) {
        super(props);
        const activeBoardColumns = this.props.columns || {};
        const columnNames = Object.keys(activeBoardColumns);

        this.state = {
            title: "",
            description: "",
            subtasks: [{ id: uuidv4(), title: "", isCompleted: false }],
            status: columnNames[0] || "",
            titleError: "",
            subtasksError: [""],
        };
    }

    componentDidUpdate(prevProps) {
        const prevColumnNames = Object.keys(prevProps.columns?.[prevProps.activeBoardId] || {});
        const currentColumnNames = Object.keys(this.props.columns?.[this.props.activeBoardId] || {});

        if (
            prevProps.activeBoardId !== this.props.activeBoardId ||
            prevColumnNames.length !== currentColumnNames.length
        ) {
            this.setState({
                status: currentColumnNames[0] || "",
            });
        }
    }

    handleTitleChange = (e) => {
        this.setState({ title: e.target.value, titleError: "" });
    };

    handleDescriptionChange = (e) => {
        this.setState({ description: e.target.value });
    };

    handleSubtaskChange = (id, value) => {
        const updatedSubtasks = this.state.subtasks.map((sub) =>
            sub.id === id ? { ...sub, title: value } : sub
        );

        const subtasksError = [...this.state.subtasksError];
        const index = this.state.subtasks.findIndex((sub) => sub.id === id);
        subtasksError[index] = "";

        this.setState({ subtasks: updatedSubtasks, subtasksError });
    };

    addSubtask = () => {
        this.setState((prevState) => ({
            subtasks: [...prevState.subtasks, { id: uuidv4(), title: "", isCompleted: false }],
            subtasksError: [...prevState.subtasksError, ""],
        }));
    };

    removeSubtask = (id) => {
        const indexToRemove = this.state.subtasks.findIndex((sub) => sub.id === id);
        const subtasks = this.state.subtasks.filter((sub) => sub.id !== id);
        const subtasksError = this.state.subtasksError.filter((_, i) => i !== indexToRemove);
        this.setState({ subtasks, subtasksError });
    };

    handleStatusChange = (e) => {
        this.setState({ status: e.target.value });
    };

    handleSave = () => {
        const { title, description, subtasks, status } = this.state;

        let hasError = false;
        if (!title.trim()) {
            this.setState({ titleError: "Title cannot be empty." });
            hasError = true;
        } else {
            this.setState({ titleError: "" });
        }

        const subtasksError = subtasks.map((sub) =>
            !sub.title.trim() ? "Subtask title cannot be empty." : ""
        );

        if (subtasksError.some((err) => err !== "")) {
            hasError = true;
        }

        this.setState({ subtasksError });

        if (hasError) return;

        const newTask = {
            id: uuidv4(),
            title,
            description,
            subtasks,
            status,
            createdAt: new Date().toISOString(), // 🆕 Tarixi əlavə et
        };

        this.props.addTaskToColumn(status, newTask);
        this.props.onClose();
    };

    render() {
        const { columns } = this.props;
        const activeBoardColumns = columns || {};
        const columnNames = Object.keys(activeBoardColumns);

        return (
            <>
                <label className="mb-2">Task Name</label>
                <input
                    placeholder="e.g. Take coffee break"
                    className="form-control"
                    value={this.state.title}
                    onChange={this.handleTitleChange}
                />
                {this.state.titleError && (
                    <p className="text-danger small mt-1">{this.state.titleError}</p>
                )}

                <label className="mt-3 mb-2">Description</label>
                <textarea
                    className="form-control"
                    value={this.state.description}
                    onChange={this.handleDescriptionChange}
                />

                <label className="mt-3">Subtasks</label>
                {this.state.subtasks.map((sub, index) => (
                    <div key={sub.id} className=" input-delete d-flex flex-wrap align-items-center gap-2 mt-2">
                        <div className="w-100 d-flex align-items-center gap-2">
                            <input
                                className="form-control"
                                value={sub.title}
                                placeholder="Subtask title"
                                onChange={(e) => this.handleSubtaskChange(sub.id, e.target.value)}
                            />
                            <img
                                src="https://kanban-task-management-app.netlify.app/static/media/icon-cross.d4ca9e0d2a82f7ea4ae08238a42f84ed.svg"
                                alt="delete"
                                style={{ height: "20px", cursor: "pointer" }}
                                onClick={() => this.removeSubtask(sub.id)}
                            />
                        </div>
                        {this.state.subtasksError[index] && (
                            <p className="text-danger small w-100">{this.state.subtasksError[index]}</p>
                        )}
                    </div>
                ))}

                <label className="mt-3 mb-2">Current Status</label>
                <select
                    className="form-select"
                    value={this.state.status}
                    onChange={this.handleStatusChange}
                >
                    {columnNames.length > 0 ? (
                        columnNames.map((colName) => (
                            <option key={colName} value={colName}>
                                {colName}
                            </option>
                        ))
                    ) : (
                        <option disabled>No columns available</option>
                    )}
                </select>

                <div className="mt-3">
                    <button className="buttons w-100 mb-2" onClick={this.addSubtask}>
                        + Add New Subtask
                    </button>
                    <button className="buttons w-100 mt-2" onClick={this.handleSave}>
                        Save Task
                    </button>
                </div>
            </>
        );
    }
}

export default AddNewTask;
