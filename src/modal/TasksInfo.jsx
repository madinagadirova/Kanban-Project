import React, { Component } from "react";

class TaskInfo extends Component {
    render() {
        const { task, handleToggleSubtask } = this.props;

        if (!task) return null;

        const completedSubtasks = task.subtasks.filter((st) => st.isCompleted).length;
        const totalSubtasks = task.subtasks.length;

        return (
            <div className="task-info-container">
                {task.description.trim() && (
                    <>
                        <h5>Description: </h5>
                        <p className="description">{task.description}</p>
                    </>
                )}

                <p className="subtasks">
                    Subtasks ({completedSubtasks} of {totalSubtasks})
                </p>

                {task.subtasks.map((subtask) => (
                    <div className="checkbox-container" key={subtask.id}>
                        <input
                            type="checkbox"
                            checked={subtask.isCompleted}
                            onChange={() => handleToggleSubtask(subtask.id)}
                        />
                        <span style={{ textDecoration: subtask.isCompleted ? "line-through" : "none" }}>
                            {subtask.title}
                        </span>
                    </div>
                ))}
                <small
                    className="text-secondary d-block pt-2"
                    style={{ fontSize: "13px", color: "#6c757d" }}
                >
                    Added on: {new Date(task.createdAt).toLocaleDateString()}
                </small>
            </div>
        );
    }
}

export default TaskInfo;
