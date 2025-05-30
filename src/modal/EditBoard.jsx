import { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class EditBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: Object.keys(props.columns).map(colName => ({
                id: uuidv4(),
                name: colName,
                tasks: props.columns[colName],
            })),
            columnsError: [],
            boardName: props.board.name || "",
            boardNameError: ""
        };
    }

    boardNameChange = (el) => {
        this.setState({ boardName: el.target.value });
    };

    columnChange = (id, value) => {

        const columns = this.state.columns.map(col =>
            col.id === id ? { ...col, name: value } : col
        );
        this.setState({ columns });
    };

    addColumn = () => {
        const columns = [...this.state.columns];
        const columnsError = [...this.state.columnsError];


        columns.push({ id: uuidv4(), name: "", tasks: [] });
        columnsError.push("");
        this.setState({
            columns,
            columnsError
        });
    };

    removeColumn = (id) => {
        const indexToRemove = this.state.columns.findIndex(col => col.id === id);
        const columns = this.state.columns.filter(col => col.id !== id);
        const columnsError = this.state.columnsError.filter((_, index) => index !== indexToRemove);
        this.setState({ columns, columnsError });
    };
    
    

    saveChange = () => {
        const { columns, boardName, columnsError } = this.state;
        const updatedColumns = {};
        let isError = false;

        columns.forEach((col, i) => {
            if (col.name.trim() === "") {
                columnsError[i] = "Column name cannot be empty.";
                isError = true;
            } else {
                columnsError[i] = "";
            }
        });
        this.setState({ columnsError });

        if (boardName.trim() === "") {
            this.setState({ boardNameError: "Board name cannot be empty." });
            isError = true;
        } else {
            this.setState({ boardNameError: "" });
        }
        

        if (isError) return;
        columns.forEach((col) => {
            updatedColumns[col.name] = col.tasks;
        });


        this.props.saveChangesEditBoard(boardName, updatedColumns);
        this.props.onClose();
    };

    render() {
        return (
            <>
                <label>Board name</label>
                <input
                    className="form-control"
                    placeholder="e.g Web Design"
                    value={this.state.boardName}
                    onChange={this.boardNameChange}
                />
                <label className="mt-3">Board Columns</label>
                {this.state.columns.map((col, index) => (
                    <div className="d-flex flex-wrap gap-2 align-items-center mt-2" key={col.id}>
                        <input
                            className="form-control"
                            placeholder="Columns name"
                            value={col.name}
                            onChange={(e) => this.columnChange(col.id, e.target.value)}
                        />
                        <img
                            src="https://kanban-task-management-app.netlify.app/static/media/icon-cross.d4ca9e0d2a82f7ea4ae08238a42f84ed.svg"
                            alt="удалить"
                            style={{ height: "20px", cursor: "pointer" }}
                            onClick={() => this.removeColumn(col.id)}
                        />
                        {this.state.columnsError[index] && (
                            <p className="text-danger small mt-1 w-100">
                                {this.state.columnsError[index]}
                            </p>
                        )}
                        {this.state.boardNameError && (
                            <p className="text-danger small mt-1">{this.state.boardNameError}</p>
                        )}

                    </div>
                ))}

                <div className="d-flex flex-wrap w-100 justify-center mt-3">
                    <button className="buttons w-100 m-2" onClick={this.addColumn}>
                        + Add Column
                    </button>
                    <button className="buttons w-100 m-2" onClick={this.saveChange}>
                        Save Changes
                    </button>
                </div>
            </>
        );
    }
}

export default EditBoard;


