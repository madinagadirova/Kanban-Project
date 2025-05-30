import { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class NewColumnModal extends Component {
    constructor(props) {
        super(props);

        const initialColumns = props.columns
            ? Object.keys(props.columns).map((colName) => ({
                id: uuidv4(),
                name: colName,
                tasks: props.columns[colName],
            }))
            : [];

        this.state = {
            columns: initialColumns,
            columnsError: "",
            newColumnName: "",
        };
    }

    changeInput = (e) => {
        this.setState({ newColumnName: e.target.value });
    };

    addNewColumn = () => {
        const { columns, newColumnName, columnsError } = this.state;
        const boardName = this.props.board?.name || "";
        const trimmedName = newColumnName.trim();
        const updatedColumns = [...columns];
        const updatedErrors = [...columnsError];

        if (trimmedName === "") {
            this.setState({ columnError: "Column name cannot be empty." });
            return;
        }

        updatedColumns.push({
            id: uuidv4(),
            name: trimmedName,
            tasks: [],
        });

        const updatedColumnsObj = {};
        updatedColumns.forEach((col) => {
            updatedColumnsObj[col.name] = col.tasks;
        });

        this.setState({
            columns: updatedColumns,
            columnsError: "",
            newColumnName: "",
        }, () => {
            this.props.saveChangesEditBoard(boardName, updatedColumnsObj);
            this.props.onClose();
        });
    };

    render() {
        const { newColumnName, columnsError } = this.state;

        return (
            <>
                <label className="mb-2">Column Name</label>
                <input
                    className="form-control mb-2"
                    placeholder="enter column name"
                    value={newColumnName}
                    onChange={this.changeInput}
                />
                {columnsError.length > 0 && (
                    <div className="text-danger mb-2">
                       {columnsError}
                    </div>
                )}
                <button
                    onClick={this.addNewColumn}
                    className="buttons w-100 mb-3 mt-2"
                >
                    + Add Column
                </button>
            </>
        );
    }
}

export default NewColumnModal;
