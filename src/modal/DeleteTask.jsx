import { Component } from "react";

class DeleteTask extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <>
                <p>
                    Are you sure you want to delete the <strong>{this.props.selectedTask.title}</strong> task and its subtasks? This action cannot be reversed.
                </p>
                <div className="button-container d-flex justify-content-between">
                    <button onClick={() => this.props.deleteTask(this.props.selectedTask.id)} className="btn btn-danger">Delete</button>
                    <button onClick={this.props.onClose} className="btn btn-secondary">Cancel</button>
                </div>
            </>
        );
    }
}

export default DeleteTask;
