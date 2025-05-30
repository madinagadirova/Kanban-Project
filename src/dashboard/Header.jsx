import React from "react";

export default class Header extends React.Component {
    render() {
        const {
            boards,
            activeBoard,
            activeBoardId,
            changeTheme,
            forTheme,
            showLogoutDiv,
            toggleLogoutDiv,
            showLogOut,
            logOut,
            boardClick,
            ShowModal,
            mobileDropdownOpen,
            toggleMobileDropdown,
        } = this.props;

        return (
            <header className="align-items-center justify-content-between d-flex px-3 py-2">
                <div className="d-flex justify-content-center align-items-center gap-3">
                    <div className="login-logo d-flex align-items-center">
                        <span className="login-logo-span1"></span>
                        <span className="login-logo-span2"></span>
                        <span className="login-logo-span3"></span>
                        <h1>kanban</h1>
                    </div>

                    <div className="header-dropdown position-relative">
                        <img
                            src="https://kanban-task-management-app.netlify.app/static/media/icon-chevron-down.77595c15c9072ba0ef8a21ab5cc8c376.svg"
                            style={{ cursor: "pointer" }}
                            onClick={toggleMobileDropdown}
                            alt="Boards Dropdown"
                        />
                        {mobileDropdownOpen && (
                            <div
                                className="mobile-backdrop position-fixed top-0 start-0 w-100 h-100"
                                onClick={() => toggleMobileDropdown(false)}
                                style={{ backgroundColor: "rgba(0,0,0,0.3)", zIndex: 999 }}
                            >
                                <div
                                    className="mobile-dropdown-menu bg-white p-3"
                                    onClick={(e) => e.stopPropagation()}
                                    style={{ maxWidth: 300, borderRadius: 8, zIndex: 1000 }}
                                >
                                    <h4 className="dropdown-title">All Boards ({boards.length})</h4>

                                    <div
                                        className="dropdown-board-item create-new d-flex align-items-center gap-2 cursor-pointer"
                                        onClick={() => {
                                            ShowModal("create_new_board");
                                            toggleMobileDropdown(false);
                                        }}
                                    >
                                        <img
                                            src="https://kanban-task-management-app.netlify.app/static/media/icon-board.29b48f5174742b4dd3a04f52d710293c.svg"
                                            alt="Create New Board"
                                        />
                                        + Create New Board
                                    </div>

                                    {boards.map(({ id, name }) => (
                                        <div
                                            key={id}
                                            className={`dropdown-board-item d-flex align-items-center gap-2 cursor-pointer ${id === activeBoardId ? "active" : ""
                                                }`}
                                            onClick={() => {
                                                boardClick(id);
                                                toggleMobileDropdown(false);
                                            }}
                                        >
                                            <img
                                                src="https://kanban-task-management-app.netlify.app/static/media/icon-board.29b48f5174742b4dd3a04f52d710293c.svg"
                                                alt={`Board: ${name}`}
                                            />
                                            {name}
                                        </div>
                                    ))}

                                    <div className="theme-toggle mt-3 d-flex align-items-center justify-content-between">
                                        <img
                                            src="https://kanban-task-management-app.netlify.app/static/media/icon-light-theme.b98efecd506358014a7ae1eadb34e36c.svg"
                                            alt="Light Theme"
                                        />
                                        <label className="switch mb-0">
                                            <input
                                                type="checkbox"
                                                checked={changeTheme}
                                                onChange={forTheme}
                                                aria-label="Toggle theme"
                                            />
                                            <span className="slider"></span>
                                        </label>
                                        <img
                                            src="https://kanban-task-management-app.netlify.app/static/media/icon-dark-theme.9812582fa58ec8051801098dbfd8c29d.svg"
                                            alt="Dark Theme"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <h3 className="text-truncate" style={{ maxWidth: "30%" }}>
                    {activeBoard?.name || ""}
                </h3>

                <div className="w-25 d-flex justify-content-end align-items-center gap-3">
                    <button
                        onClick={() => ShowModal("add_new_task")}
                        className="add_new_btn d-flex align-items-center gap-1"
                        aria-label="Add New Task"
                    >
                        <span className="plus-icon">+</span>
                        <span className="add-text">Add New Task</span>
                    </button>

                    <div className="for-login position-relative">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/6331/6331490.png"
                            alt="User Icon"
                            style={{ cursor: "pointer" }}
                            onClick={() => showLogOut(activeBoardId)}
                        />
                        {showLogoutDiv && (
                            <div className="mini-popup position-absolute bg-white p-2 rounded shadow-sm" style={{ right: 0, top: "100%" }}>
                                <div className="d-flex align-items-center gap-2 cursor-pointer" onClick={() => ShowModal("info")}>
                                    <img
                                        className="info"
                                        src="https://wcs.uwo.ca/srs/upload/infosess.png"
                                        alt="Info"
                                    />
                                    <p className="mb-0">Info</p>
                                </div>
                                <div className="d-flex align-items-center gap-2 cursor-pointer" onClick={logOut}>
                                    <img
                                        className="log-out"
                                        src="https://aci.asendia.co.uk/images/Login.png"
                                        alt="Log Out"
                                    />
                                    <p className="mb-0">Log Out</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </header>
        );
    }
}
