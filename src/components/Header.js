import React from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

//import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../assets/logo.png'
import styled from 'styled-components'
import Login from './Login'
import Signup from './Signup'
import Main from './Main'

import '../App.css'

const ButtonDiv = styled.div `
    float: right;
`

const Button = styled.button`
    background: transparent;
    font-size: 16px;
    border-radius: 3px;
    color: gold;
    border: 2px solid gold;  
    margin: 0 1em;
    padding: 0.25em 1em;
    transition: 0.5s all ease-out;
    
    &:hover {
        background-color: gold;
        color: white;
    }
`

function Header() {
    return (
        <Router>
            <div>
                <Navbar className="bg-dark" variant="dark">
                    <Nav>
                        <Link to="/">
                            <Navbar.Brand>
                                <img className="App-logo" alt="watchtime logo" src={logo} /> WatchTime
                            </Navbar.Brand>{' '}
                        </Link>
                    </Nav>
                    <ButtonDiv className="ml-auto">
                        <Link to="/login">
                            <Button className="justify-content-end"> Log In</Button>
                        </Link>

                        <Link to="/signup">
                            <Button className="justify-content-end">Sign Up</Button>
                        </Link>
                    </ButtonDiv>

                </Navbar>

                <Switch>
                    <Route exact path="/" component={Main}/>

                    <Route path="/login" component={Login}/>

                    <Route path="/signup" component={Signup}/>

                </Switch>

            </div>
        </Router>
    )
}

export default Header