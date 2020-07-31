import React from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import logo from '../assets/logo.png'
import styled from 'styled-components'

import Profile from './Profile'
import Signup from './Signup'
import Login from './Login'
import Main from './Main'

import '../App.css'

const Navbar = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: black;
`

const Brand = styled.div `
    display: flex;
    margin-left: 15px;
    padding: 5px;
    color: white;
`

const AppName = styled.h1 `
    padding: 5px;
`

const ButtonDiv = styled.div `
    display: flex;
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
                <Navbar>
                    <Link to="/"> 
                        <Brand>
                            <img className="App-logo" alt="logo" src={logo}></img>
                            <AppName>WatchTime</AppName>
                        </Brand>
                    </Link>
                    
                    <ButtonDiv>
                        <Link to="/login">
                            <Button> Log In</Button>
                        </Link>
                        <Link to="/signup">
                            <Button>Sign Up</Button>
                        </Link>
                        <Link to="/profile">
                            <Button>Profile Test</Button>
                        </Link>
                    </ButtonDiv>
                </Navbar>

                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/signup" component={Signup}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/search/:searchTerm"/>
                </Switch>

            </div>
        </Router>
    )
}

export default Header