import React, { Component } from "react";

class Aside extends Component {
  render() {
    const {
      hiddenSidebar,
      boards,
      activeBoardId,
      showBoardDiv,
      changeTheme,
      sidebarHide,
      ShowModal,
      boardClick,
      forTheme,
      showBoardEditDelete,
    } = this.props;

    return (
      <aside>
        {!hiddenSidebar ? (
          <div className="boards-container">
                    <div className="all-boards-inner-container"> <div className="all-board position-relative">
                        <h4>All Boards ({boards.length})</h4>
                        <img
                            onClick={() => showBoardEditDelete(activeBoardId)}
                            className="three-dots"
                            style={{ position: "absolute", right: 0, top: 5, cursor: "pointer" }}
                            src="https://kanban-task-management-app.netlify.app/static/media/icon-vertical-ellipsis.5c8996197d4a9dd7a7adfa20ce4abef9.svg"
                            alt="Board options"
                        />
                        {showBoardDiv && (
                            <div className="mini-popup">
                                <p onClick={() => ShowModal("edit_board")}>Edit Board</p>
                                <p onClick={() => ShowModal("delete_board")}>Delete Board</p>
                            </div>
                        )}
                    </div>

                        <div className="dropdown-board">
                            <img
                                src="https://kanban-task-management-app.netlify.app/static/media/icon-board.29b48f5174742b4dd3a04f52d710293c.svg"
                                alt="Board icon"
                            />
                            <button className="create-new-btn" onClick={() => ShowModal("create_new_board")}>
                                + create new board
                            </button>
                        </div>

                        {boards.map(({ id, name }) => (
                            <div
                                key={id}
                                className={`dropdown-board ${id === activeBoardId ? "active" : ""}`}
                                onClick={() => boardClick(id)}
                            >
                                <img
                                    src="https://kanban-task-management-app.netlify.app/static/media/icon-board.29b48f5174742b4dd3a04f52d710293c.svg"
                                    alt="Board icon"
                                />
                                {name}
                            </div>
                        ))}</div>

                    <div className="theme-hide-container">   <div className="theme-toggle">
                        <div className="about-theme-toggle">
                            <img
                                src="https://kanban-task-management-app.netlify.app/static/media/icon-light-theme.b98efecd506358014a7ae1eadb34e36c.svg"
                                alt="Light theme"
                            />
                            <label className="switch">
                                <input type="checkbox" checked={changeTheme} onChange={forTheme} />
                                <span className="slider"></span>
                            </label>
                            <img
                                src="https://kanban-task-management-app.netlify.app/static/media/icon-dark-theme.9812582fa58ec8051801098dbfd8c29d.svg"
                                alt="Dark theme"
                            />
                        </div>
                    </div>

                        <div className="hide" onClick={sidebarHide}>
                            <img
                                src="https://kanban-task-management-app.netlify.app/static/media/icon-show-sidebar.b186c9a8e4a2e4d7d83e0676d3e128fc.svg"
                                alt="Hide sidebar"
                            />
                            Hide Sidebar
                        </div></div>
            </div>
        ) : (
          <button className="show-sidebar-btn" onClick={sidebarHide}>
            <img
              src="https://kanban-task-management-app.netlify.app/static/media/icon-show-sidebar.b186c9a8e4a2e4d7d83e0676d3e128fc.svg"
              alt="Show sidebar"
            />
          </button>
        )}
      </aside>
    );
  }
}

export default Aside;
