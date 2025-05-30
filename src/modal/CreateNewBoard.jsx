import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./style.css";

class CreateNewModal extends Component {
    constructor() {
        super();
        this.state = {
            boardName: "",
            columns: [
                { id: uuidv4(), name: "Todo", error: "" },
                { id: uuidv4(), name: "Doing", error: "" },
            ],
            boardNameError: "",
        };
    }

    inputChange = (e) => {
        this.setState({ boardName: e.target.value });
    };

    columnChange = (id, value) => {
        const columns = this.state.columns.map(col =>
            col.id === id ? { ...col, name: value } : col
        );
        this.setState({ columns });
    };

    addColumn = () => {
        this.setState(prevState => ({
            columns: [...prevState.columns, { id: uuidv4(), name: "", error: "" }]
        }));
    };

    removeColumn = (id) => {
        const columns = this.state.columns.filter(col => col.id !== id);
        this.setState({ columns });
    };

    createBoard = () => {
        const { boardName, columns } = this.state;
        let hasError = false;

        if (boardName.trim() === "") {
            this.setState({ boardNameError: "Board name cannot be empty." });
            hasError = true;
        } else {
            this.setState({ boardNameError: "" });
        }

        const updatedColumns = columns.map(col => {
            if (col.name.trim() === "") {
                hasError = true;
                return { ...col, error: "Column name cannot be empty." };
            }
            return { ...col, error: "" };
        });

        this.setState({ columns: updatedColumns });

        if (hasError) return;

        const allColumnNames = updatedColumns.map(col => col.name);

        this.props.addNewBoard(boardName, allColumnNames);


        this.setState({
            boardName: "",
            columns: [
                { id: uuidv4(), name: "To Do", error: "" },
                { id: uuidv4(), name: "Doing", error: "" },
            ],
            boardNameError: "",
        });

        this.props.onClose();
    };

    render() {
        return (
            <>
                <label>Board Name</label>
                <input
                    className="form-control"
                    placeholder="e.g. Web Design"
                    value={this.state.boardName}
                    onChange={this.inputChange}
                />
                {this.state.boardNameError && (
                    <p className="text-danger small mt-1">{this.state.boardNameError}</p>
                )}

                <label className="mt-3">Board Columns</label>

                {this.state.columns.map((col) => (
                    <div key={col.id} className="d-flex flex-wrap gap-2 align-items-center mt-2">
                        <input
                            className="form-control"
                            placeholder="Column name"
                            value={col.name}
                            onChange={(e) => this.columnChange(col.id, e.target.value)}
                        />
                        <img
                            src="https://kanban-task-management-app.netlify.app/static/media/icon-cross.d4ca9e0d2a82f7ea4ae08238a42f84ed.svg"
                            alt="delete"
                            style={{ height: "20px", cursor: "pointer" }}
                            onClick={() => this.removeColumn(col.id)}
                        />
                        {col.error && (
                            <p className="text-danger small mt-1 w-100">{col.error}</p>
                        )}
                    </div>
                ))}

                <div className="d-flex flex-wrap w-100 justify-center mt-3">
                    <button className="buttons w-100 m-2" onClick={this.addColumn}>+ Add Column</button>
                    <button className="buttons w-100 m-2" onClick={this.createBoard}>Create Board</button>
                </div>
            </>
        );
    }
}

export default CreateNewModal;
