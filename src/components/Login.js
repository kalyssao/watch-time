import React from "react"

function logMeIn() {
    console.log("Pressed login")
}

function Login() {
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={logMeIn()}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username"></input>

                <label htmlFor="password">Password</label>
                <input type="password" id="password"></input>

                <button type="submit" className="btn btn-primary">Log In</button>
            </form>
        </div>
    )
}

export default Login