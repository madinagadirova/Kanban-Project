import React from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const DragDropBoard = ({ columns, onDragEnd, onTaskClick }) => {
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="dnd-board" style={{ display: "flex", gap: "1rem" }}>
                {Object.entries(columns).map(([columnId, tasks]) => (
                    <div key={columnId} style={{ width: "290px", padding: "10px" }}>
                        <h3>{columnId}</h3>
                        <Droppable droppableId={columnId}>
                            {(provided) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    style={{ minHeight: "100px", background: "none" }}
                                >
                                    {tasks.map((task, index) => {
                                        const completed = task.subtasks?.filter(st => st.isCompleted).length || 0;
                                        const total = task.subtasks?.length || 0;

                                        return (
                                            <Draggable key={task.id} draggableId={task.id} index={index}>
                                                {(provided) => (
                                                    <div
                                                        className="col-item"
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        onClick={() => onTaskClick("tasks-info", task)}
                                                        style={{
                                                            ...provided.draggableProps.style,
                                                            
                                                        }}
                                                    >
                                                        <div style={{ fontWeight: "bold", marginBottom: "6px" }}>
                                                            {task.title}
                                                        </div>
                                                        <small className="text-muted">
                                                            <b>{completed} of {total} subtasks</b>
                                                        </small>

                                                        {task.createdAt && (
                                                            <small
                                                                className="text-secondary d-block mt-1"
                                                                style={{ fontSize: "11px", color: "#6c757d" }}
                                                            >
                                                                Added on: {new Date(task.createdAt).toLocaleDateString()}
                                                            </small>
                                                        )}
                                                    </div>
                                                )}
                                            </Draggable>
                                        );
                                    })}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </div>
                ))}
            </div>
        </DragDropContext>
    );
};

export default DragDropBoard;
