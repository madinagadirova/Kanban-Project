import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';

class TaskEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.task.title || "",
            description: props.task.description || "",
            subtasks: props.task.subtasks || [{ id: uuidv4(), title: "", isCompleted: false }],
            subtasksError: [],
        };
    }

    handleTitleChange = (e) => {
        this.setState({ title: e.target.value });
    };

    handleDescriptionChange = (e) => {
        this.setState({ description: e.target.value });
    };

    handleSubtaskChange = (id, value) => {
        const updatedSubtasks = this.state.subtasks.map(sub =>
            sub.id === id ? { ...sub, title: value } : sub
        );
        this.setState({ subtasks: updatedSubtasks });
    };

    addSubtask = () => {
        this.setState(prevState => ({
            subtasks: [...prevState.subtasks, { id: uuidv4(), title: "", isCompleted: false }],
            subtasksError: [...prevState.subtasksError, ""],
        }));
    };

    removeSubtask = (id) => {
        const indexToRemove = this.state.subtasks.findIndex(sub => sub.id === id);
        const subtasks = this.state.subtasks.filter(sub => sub.id !== id);
        const subtasksError = this.state.subtasksError.filter((_, i) => i !== indexToRemove);
        this.setState({ subtasks, subtasksError });
    };

    saveTask = () => {
        const { title, description, subtasks } = this.state;
        let hasError = false;
        const subtasksError = [];

        subtasks.forEach((sub, i) => {
            if (sub.title.trim() === "") {
                subtasksError[i] = "Subtask title cannot be empty.";
                hasError = true;
            } else {
                subtasksError[i] = "";
            }
        });

        this.setState({ subtasksError });

        if (hasError || title.trim() === "") return;

        const updatedTask = {
            ...this.props.task,
            title,
            description,
            subtasks,
        };

        this.props.saveTask(updatedTask);
    };

    render() {
        return (
            <>
                <label>Title</label>
                <input
                    className="form-control"
                    value={this.state.title}
                    onChange={this.handleTitleChange}
                />

                <label className="mt-3">Description</label>
                <textarea
                    className="form-control"
                    value={this.state.description}
                    onChange={this.handleDescriptionChange}
                />

                <label className="mt-3">Subtasks</label>
                {this.state.subtasks.map((sub, index) => (
                    <div key={sub.id} className="d-flex flex-wrap align-items-center gap-2 mt-2">
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
                        {this.state.subtasksError[index] && (
                            <p className="text-danger small w-100">
                                {this.state.subtasksError[index]}
                            </p>
                        )}
                    </div>
                ))}

                <div className="mt-3">
                    <button className="buttons w-100 mb-2" onClick={this.addSubtask}>+ Add New Subtask</button>
                    <button className="buttons w-100 mt-2" onClick={this.saveTask}>Save Changes</button>
                </div>
            </>
        );
    }
}

export default TaskEdit;
