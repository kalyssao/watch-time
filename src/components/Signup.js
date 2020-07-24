import React from 'react'
import firebase from '../services/Firebase'

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = { ...INITIAL_STATE }
    }
    signMeUp = event => {
        const { username, email, passwordOne } = this.state

        this.props.firebase
        .doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {
            // Create a user in your Firebase realtime database
            return this.props.firebase
            .user(authUser.user.uid)
            .set({
                username,
                email,
            })
        })
        .then(() => {
            this.setState({ ...INITIAL_STATE })
            //this.props.history.push(ROUTES.HOME)
        })
        .catch(error => {
            this.setState({ error })
        });
    }
    
    render() {
        return (
            <div>
                <h2>Signup</h2>
                <form onSubmit={this.signUp} className>
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
}

export default Signup