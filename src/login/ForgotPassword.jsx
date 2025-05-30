import { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";

class Forgot extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            errorEmail: "",
            inputError: ""  
        };
    }

    
    emailChange = (el) => {
        this.setState({ email: el.target.value, errorEmail: '', inputError: '' });  
    };


    forEmail = () => {
        const { email } = this.state;

        if (email === "") {
            this.setState({ errorEmail: 'The email field is empty', inputError: "error" });
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            this.setState({ errorEmail: 'Invalid email', inputError: "error" });
        } else {
            alert("A password reset link has been sent to your email.")
        }
    };

    render() {
        return (
            <>
                <div className="forgot-container d-flex">
                    <div className="forgot-info">
                        <div className="login-logo d-flex align-items-center">
                            <h1>kanban</h1>
                        </div>
                        <div className="forgot-pass d-flex align-items-center">
                            <h3>Forgot Password?</h3>
                            <img src="https://cdn-icons-png.flaticon.com/512/3349/3349232.png" alt="" />
                        </div>
                        <p>Enter your email and we'll send you instructions to reset your password</p>
                        <div className="form-group">
                            <input
                                type="email"
                                required
                                id="label-input"
                                className={`form-control ${this.state.inputError === "error" ? "error-input" : ""}`}  // ispol'zuyem to, chto nakhodytsya v state
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.emailChange}
                            />
                        </div>

                       
                            <p style={{ color: "red", fontSize: "14px", paddingTop: "20px" }}>{this.state.errorEmail}</p>

                        <button className="reset-btn" onClick={this.forEmail}>Send Reset Link</button>
                        <div className="back d-flex">
                            <img  src="https://cdn-icons-png.flaticon.com/512/12833/12833047.png" alt="" />
                            <Link to="/login">Back to login</Link>
                        </div>
                    </div>
                    <img src="https://kanban-alpha.netlify.app/assets/forgot-password-fc3c5e62.svg" />
                </div>
            </>
        );
    }
}

export default Forgot;
