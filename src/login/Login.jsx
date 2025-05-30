import { Component } from "react";
import "./style.css";
import { Navigate, Link } from "react-router-dom";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            dashboard: false,
            loggedIn: false
        };
    }

    changeInput = (el) => {
        this.setState({ [el.target.name]: el.target.value });
    };

    submitForm = (el) => {
        el.preventDefault();

        const { password, email } = this.state;

        const userFromStore = JSON.parse(localStorage.getItem("user"));
        if (
            userFromStore &&
            userFromStore.email === email &&
            userFromStore.password === password
        ) {
            localStorage.setItem("loggedIn", "true");
            this.setState({ dashboard: true });
        } else {
            localStorage.setItem("loggedIn", "false");
            alert("User does not exist!");
        }

       
        this.setState({
            email: "",
            password: "",
        });
    };

    render() {
        const { email, password, dashboard } = this.state;

       
        if (dashboard) {
            return <Navigate to="/dashboard" replace />;
        }

        return (
            <>
                <div className="main-container d-flex">
                    <div className="login-container">
                        <div className="login-logo d-flex align-items-center">
                            <div className="login-logo-span1"></div>
                            <div className="login-logo-span2"></div>
                            <div className="login-logo-span3"></div>
                            <h1>kanban</h1>
                        </div>
                        <h4>Welcome to Kanban!</h4>
                        <p>Please sign-in to your account and start the adventure</p>
                        <form className="form" onSubmit={this.submitForm}>
                            <div className="form-group">
                                <label htmlFor="email_input">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    required
                                    id="email_input"
                                    name="email"
                                    value={email}
                                    onChange={this.changeInput}
                                    placeholder="Enter your email address..."
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password_input">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    required
                                    id="password_input"
                                    name="password"
                                    value={password}
                                    onChange={this.changeInput}
                                    placeholder="Enter your password..."
                                />
                            </div>
                            <button type="submit">LOGIN</button>
                        </form>

                        <Link to="/forgot">Forgot Password?</Link>

                        <div className="p">
                            <p>New on our platform?</p>
                            <Link to="/register">Create an account</Link>
                        </div>

                        <div className="hr d-flex">
                            <div></div> or <div></div>
                        </div>

                        <div className="for-icons d-flex">
                            <img
                                src="https://icon-library.com/images/white-facebook-icon-transparent/white-facebook-icon-transparent-5.jpg"
                                alt=""
                            />
                            <img
                                src="https://webstockreview.net/images/google-logo-png-9.png"
                                alt=""
                            />
                            <img
                                src="https://webstockreview.net/images/twitter-icon-white-png-13.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <img
                        className="image"
                        src="https://kanban-alpha.netlify.app/assets/login-85e633c0.svg"
                        alt=""
                    />
                </div>
            </>
        );
    }
}

export default Login;
