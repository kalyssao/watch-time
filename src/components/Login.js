import React from "react"
import styled from 'styled-components'
//import { auth } from "firebase"

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
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
}

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = { ...INITIAL_STATE }
    }

    login = event => {
        const { email, password } = this.state

        event.preventDefault()
        console.log("Pressed Log In")
        /*this.props.firebase
        .doSignInWithEmailAndPassword(email, password)
        .then(() => {
            this.setState({ ...INITIAL_STATE})
            //this.props.history.push(ROUTES.HOME)
        })
        .catch(error => {
            this.setState({ error })
        })*/
        
    }

    render() {
        return (
            <Container>
                <FormWrapper>
                    <form onSubmit={this.login}>
                        <h2>Login</h2>
                        <FormItems>
                            <Label>Email</Label>
                            <input type="text" id="email"></input>  
                        </FormItems>

                        <FormItems>
                            <Label>Password</Label>
                            <input type="password" id="password"></input> 
                        </FormItems>

                        <Button>Log In</Button>
                        <Label>Forgot Password?</Label>
                    </form>
                    
                </FormWrapper>
            </Container>
        )
    }
}

export default Login