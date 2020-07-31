import React from 'react'
//import firebase from '../services/Firebase'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-style: solid;
    background-color: white;
    max-width: 100%;
    padding: 40px;
    height: 75vh;    
`
const FormWrapper = styled.div `
    width: 55%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const FormItems = styled.div `   
    padding-bottom: 20px;
`
const Label = styled.label `
    width: 100%
`
const Button = styled.button`
    display: inline-block;
    border-radius: 3px;
    width: 75%;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    border: 2px gold;
`

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
        event.preventDefault()
        console.log('pressed sign up')
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
            <Container>
                <FormWrapper>
                    <form onSubmit={this.signUp}>
                        <h2>Sign Up</h2>
                        <FormItems>
                            <Label>Username</Label>
                            <input type="text" id="username"></input>  
                        </FormItems>

                        <FormItems>
                            <Label>Email</Label>
                            <input type="email" id="email"></input> 
                        </FormItems>

                        <FormItems>
                            <Label>Password</Label>
                            <input type="password" id="password"></input> 
                        </FormItems>

                        <Button>Sign Up In</Button>
                    </form>
                    
                </FormWrapper>
            </Container>
        )
    }
}

export default Signup