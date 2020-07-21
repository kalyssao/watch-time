import React from "react"
import '../App.css'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../assets/logo.png'

function Header() {
    return (
        <div>
            <Navbar className="bg-dark" variant="dark">
                <Navbar.Brand>
                    <img className="App-logo" alt="watchtime logo" src={logo} /> WATCH TIME
                </Navbar.Brand>{' '}
                <Button onClick="{logIn}">Log In</Button>
                <Button>Sign Up</Button>
            </Navbar>
        </div>
    )
}

export default Header