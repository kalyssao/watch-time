import React from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

//import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../assets/logo.png'

import Login from './Login'
import Signup from './Signup'
import Main from './Main'

import '../App.css'

function Header() {
    return (
        <Router>
            <div>
                <Navbar className="bg-dark" variant="dark">
                    <Link to="/">
                        <Navbar.Brand>
                            <img className="App-logo" alt="watchtime logo" src={logo} /> WATCH TIME
                        </Navbar.Brand>{' '}
                    </Link>

                    <Link to="/login">
                        Log In
                    </Link>

                    <Link to="/signup">
                        Sign Up
                    </Link>

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