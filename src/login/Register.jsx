import { Component } from "react";
import { Link } from "react-router-dom";

class Register extends Component {
    constructor() {
        super();
        this.state = {
            fullname: "",
            email: "",
            password: "",
            errorEmail: "",
            inputError: ""  
        };
    }

    changeInput = (el) => {
        this.setState({ [el.target.name]: el.target.value });
    };

    submitForm = (el) => {
        el.preventDefault();
        const { fullname, email, password } = this.state;

        if (!fullname || !email || !password) {
            alert("All fields are required!");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Invalid email.");
            return;
        }

        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordRegex.test(password)) {
            alert("Password must be at least 8 characters long and contain letters and numbers.");
            return;
        }

        const userData = { fullname, email, password };
        localStorage.setItem("user", JSON.stringify(userData));

        alert("Register was successfully!");
    };

    render() {
        const { fullname, email, password } = this.state;

        return (
            <>
                <div className="register-container d-flex">
                    <div className="login-container">
                        <div className="login-logo d-flex align-items-center">
                            <div className="login-logo-span1"></div>
                            <div className="login-logo-span2"></div>
                            <div className="login-logo-span3"></div>
                            <h1>kanban</h1>
                        </div>
                        <h4>Adventure starts here</h4>
                        <p>Make your app management easy and fun!</p>
                        <form className="form" onSubmit={this.submitForm}>
                            <div className="form-group">
                                <label htmlFor="fullname-input">Fullname</label>
                                <input
                                    type="text"
                                    id="fullname-input"
                                    name="fullname"
                                    className={`form-control ${this.state.inputError === "error" ? "error-input" : ""}`} 
                                    value={fullname}
                                    onChange={this.changeInput}
                                    placeholder="Enter your Fullname..."
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email_input">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
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
                                    id="password_input"
                                    name="password"
                                    value={password}
                                    onChange={this.changeInput}
                                    placeholder="Enter your password..."
                                />
                            </div>

                            <button type="submit">Sign Up</button>
                        </form>

                        <div className="p">
                            <p>Already have an account?</p>
                            <Link to="/login">Sign in instead</Link>
                        </div>

                        <div className="hr d-flex">
                            <div></div>
                            or
                            <div></div>
                        </div>
                        <div className="for-icons d-flex">
                            <img src="https://icon-library.com/images/white-facebook-icon-transparent/white-facebook-icon-transparent-5.jpg" alt="" />
                            <img src="https://webstockreview.net/images/google-logo-png-9.png" alt="" />
                            <img src="https://webstockreview.net/images/twitter-icon-white-png-13.png" alt="" />
                        </div>
                    </div>
                    <img className="image" src="https://kanban-alpha.netlify.app/assets/signup-f18d26b4.svg" alt="" />
                </div>
            </>
        );
    }
}

export default Register;
