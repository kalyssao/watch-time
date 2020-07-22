import React from 'react'

function signMeUp() {
    console.log("Pressed Sign Up")
}

function Signup() {
    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={signMeUp()}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username"></input>

                <label htmlFor="email">Email</label>
                <input type="text" id="email"></input>

                <label htmlFor="password">Password</label>
                <input type="password" id="password"></input>

                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </div>
    )
}

export default Signup