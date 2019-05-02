import React from 'react';
import './Login.css';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            userText: '',
            passText: ''
        }
    }

    signIn = event => {
        // event.preventDefault();
        localStorage.setItem(this.state.userText, this.state.passText);
        // window.location.reload();
    }

    handleChanges = event => {
        console.log(this.state)

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="login">
                <h2>Login</h2>
                <form onSubmit={this.signIn}>
                <h3>Username</h3> 
                    <input type="text" value={this.state.userText} name="userText" 
                    onChange={this.handleChanges} placeholder="Username">
                    </input>
                <h3>Password</h3>
                    <input type="text" value={this.state.passText} name="passText"
                    onChange={this.handleChanges} placeholder="Password">
                    </input>
                    <button>Sign In</button>
                </form>
                <h3>Forgot Password</h3>       
            </div>
        )

    }

}

export default Login;