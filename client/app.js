import React, { Component } from 'react'
import {BrowserRouter as Router,
        Switch,
        Route,
        Redirect
        } from 'react-router-dom'
import { connect } from 'react-redux'

import grid from './assets/styles/grid.css'
import style from './assets/styles/style.css'

import Nav from './containers/Nav'
import Home from './containers/Home'
import Signup from './containers/Signup'
import Login from './containers/Login'
import About from './containers/About'
import Allbooks from './containers/Allbooks'
import Mybooks from './containers/Mybooks'
import Settings from './containers/Settings'

 class App extends Component{
    render(){
        return(
            <div className='app'>
            
                <Router>
               
                    <div>
                    <Nav />
                <div className = 'container'>
                    <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/signup' render={() => (

                        this.props.isAuthenticated ? (
                            <Redirect to="/"/>
                        ) : (
                            <Signup/>
                        )
                        )}/>
                        <Route exact path='/login' render={() => (

                        this.props.isAuthenticated ? (
                            <Redirect to="/"/>
                        ) : (
                            <Login/>
                        )
                        )}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/allbooks' render={() => (

                        this.props.isAuthenticated ? (
                            <Allbooks />
                        ) : (
                            <Redirect to="/"/>
                            
                        )
                        )}/>
                    <Route exact path='/mybooks' render={() => (

                        this.props.isAuthenticated ? (
                            <Mybooks />
                        ) : (
                            <Redirect to="/"/>
                            
                        )
                        )}/>
                    <Route exact path='/settings' render={() => (

                        this.props.isAuthenticated ? (
                            <Settings />
                        ) : (
                            <Redirect to="/"/>
                            
                        )
                        )}/>

                    </Switch>
                    </div>
                    </div>
                </Router>
            </div>
        )
    }

}

const mapStateToProps = (state)=>{
    return{
        isAuthenticated:state.user.isAuthenticated
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)