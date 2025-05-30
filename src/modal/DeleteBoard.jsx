import { Component } from "react";

class Delete extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <>
                <h5>Delete this Board?</h5>
                <p>
                    Are you sure you want to delete the <strong>{this.props.boardNameToDelete}</strong> board? This action cannot be reversed.
                </p>
                <div className="button-container d-flex justify-content-between ">
                    <button onClick={this.props.deleteBoard} className="btn btn-danger">Delete</button>
                    <button onClick={this.props.onClose} className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                </div>
            </>
        )
    }
}

export default Delete