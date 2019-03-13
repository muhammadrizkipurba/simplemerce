import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import cookies from 'universal-cookie'
import {connect} from 'react-redux'

import Home from './Home'
import Header from './Header'
import Login from './Login'
import Register from './Register'
import {keepLogin} from '../actions'

const cookie = new cookies()

class App extends Component {
    // life cycle hook / method
    
    componentDidMount(){
        // akan di jalankan sekali ketika pertama kali component di render
        var userCookie = cookie.get('masihLogin')
        if(userCookie !== undefined){
            console.log("cookie ada")
            this.props.keepLogin(userCookie)
        }

    }

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

export default connect(null, {keepLogin})(App)