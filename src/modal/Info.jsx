import { Component } from "react";

class Info extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <>
                <div className="project-info">
                    <b>About Project</b>
                    <h2>Kanban Task Management</h2>
                    <div>Kanban Task Management is a React Composition API website that allows you to manage your tasks using the Kanban methodology.</div>
                    <div>When you first enter the site, you will need to log in or create an account. Once you are logged in, you will see a list of your boards. You can create a new board by clicking the <span> "Create New Board"</span> button.</div>
                    <div>Each board has three columns by default: Todo, Doing, and Done. You can change the names of these columns or add new columns by clicking the <span>"Edit Board"</span> button.</div>
                    <div>To create a new task, click the <span>"Create New Task"</span> button in the upper right corner of the screen. In the new task window, you can enter the name of the task, a description, and subtasks. You can also choose which column the task should be in.</div>
                    <div>To view a task in more detail, click on it. This will open a window where you can see the task's description, subtasks, and status. You can also complete subtasks and move the task to other columns by clicking the corresponding buttons.</div>
                    <div>To edit or delete a task, click the corresponding buttons in the task's detail window.</div>
                    <p>Features:</p>
                    <ul>
                        <li>Login and user management with Firebase</li>
                        <li>Create, edit, and delete boards</li>
                        <li> Create, edit, and delete tasks</li>
                        <li>View task details, complete subtasks, and move tasks to other columns</li>
                        <li>Bootstrap design</li>
                    </ul>
                    <p>Limitations:</p>
                    <ul><li>
                        Since the site does not have a backend, all tasks or boards created will be lost when the site is renewed.</li></ul>
                    <p>Who can use Kanban Task Management?</p>
                    <div>Kanban Task Management can be used by anyone who needs to manage their tasks, such as individuals, teams, and businesses. It is especially well-suited for projects that have multiple stages, such as software development, product development, and marketing campaigns.</div>
                    <p>How to get started with Kanban Task Management:</p>
                    <ul className="number"><li>Create an account or log in to the site.</li>
                        <li>Create a new board for your project.</li>
                        <li>Create new tasks and add them to the board.</li>
                        <li>View task details, complete subtasks, and move tasks to other columns as needed.</li>
                    </ul>
                    <h5>Created by Madina Gadirova</h5>
                </div>
            </>
        )
    }
}

export default Info