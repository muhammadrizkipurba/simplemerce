import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Home from './Home'
import Header from './Header'
import Login from './Login'
import Register from './Register'

class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    {/* link.contains("/login") */}
                    {/* link === "/login" */}
                    <Header/>
                    <Route path="/" exact component={Home}/>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                </div>
            </BrowserRouter>
        )
    }
}

export default App