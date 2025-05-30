
import React from "react";
import DragDropBoard from "./DragDropBoard";

const Main = ({ columns, activeBoardId, ShowModal, onDragEnd }) => {
    return (
        <main>
            <button onClick={() => ShowModal("new_column")} className="button-for-add">
                +
            </button>

            {columns[activeBoardId] && (
                <DragDropBoard
                    columns={columns[activeBoardId]}
                    onDragEnd={onDragEnd}
                    onTaskClick={ShowModal}
                />
            )}
        </main>
    );
};

export default Main;
