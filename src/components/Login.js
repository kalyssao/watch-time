import React from "react"
import styled from 'styled-components'
import { auth } from "firebase"

const Container = styled.div`
    border-style: solid;
    border-color: black;
    margin: 0 auto;
    max-width: 900px;
    padding: 40px;
`

const FormWrapper = styled.div `
    label {
        width: 100%
    }
    input[type=text], input[type=password] {
    width: 75%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    }

    /* Style the submit button */
    input[type=submit] {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    }

    button {
        width: 100%;
    }
`

export default function Login() {

    function logIn(event, email, password) {
        event.preventDefault()
    }

    return (
        <Container>
            <h2>Login</h2>
            <FormWrapper>
                <form onSubmit={logIn}>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email"></input>

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password"></input>

                    <button type="submit" className="btn btn-primary">Log In</button>
                </form>
                <p className="text-center my-3">Forgot Password?</p>
            </FormWrapper>
        </Container>
    )
}