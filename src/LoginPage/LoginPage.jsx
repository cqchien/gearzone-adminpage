import React from "react";
import './LoginPage.scss'
import { FaUser } from 'react-icons/fa';

class LoginPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            username : "",
            password : ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.login(username, password);
        }
    }

    render() {

        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;

        return(
            <div className="container">

                <div className="bg-form" style={{ backgroundImage:"url(/img/bg-01.jpg)"}}>
                    <div className="wrap-form">
                        <h2>Login</h2>
                        <form name="form" onSubmit={this.handleSubmit}>

                        {/* Create form username */}
                        <div className="form-group">
                            <label htmlFor="username"> Username</label>
                            <input
                            type="text" 
                            className="form-control"
                            name="username"
                            value={username}
                            placeholder="Enter your username" 
                            onChange={this.handleChange}
                            />
                            <span class="focus-input100"><FaUser/></span>
                        </div>

                        {/* Create form password */}
                        <div className="form-group">
                            <label htmlFor="password"> Password</label>
                            <input
                            type="password" 
                            className="form-control"
                            name="password"
                            value={password}
                            placeholder="Enter your password"
                            onChange={this.handleChange}
                            />
                        </div>
                        <div className="wrap-btn">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        </form>
                    </div>

                </div>

            </div>
        );
    }
}

export default LoginPage;