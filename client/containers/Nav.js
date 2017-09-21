import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton'
import Settings from 'material-ui/svg-icons/Action/settings';

class Nav extends Component{
    render(){
        const style = {
            background:{
                background:'#B71C1C', 
                color: '#e5e5e5'
            },
            decoration:{
                textDecoration:'none',
                color:'#e5e5e5',
                fontSize:36
            }
        }
        return(
            <div className = 'nav'>
                <Toolbar  style={style.background}>
                    <ToolbarGroup firstChild={true}>
                    <Link style={style.decoration} to = '/'><ToolbarTitle text="Booktrade" style={style.decoration} /></Link>
                    </ToolbarGroup>
                    <ToolbarGroup lastChild={true}>
                    <Link style={style.decoration} to = '/about'><ToolbarTitle text="About" style={style.decoration} /></Link>
                    {this.props.isAuthenticated?
                    (
                    <div>
                        <Link style={style.decoration} to = '/allbooks'><ToolbarTitle text="all books" style={style.decoration}/></Link>
                        <Link style={style.decoration} to = '/mybooks'><ToolbarTitle text="my books" style={style.decoration}/></Link>
                        <Link style={style.decoration} to = '/settings'><Settings /></Link>
                        <Link style={style.decoration} to = '/logout'><ToolbarTitle text="Logout" style={style.decoration}/></Link>
                    </div>
                    ):
                    (
                    <div>
                        <Link style={style.decoration} to = '/signup'><ToolbarTitle text="Signup" style={style.decoration}/></Link>
                        <Link style={style.decoration} to = '/login'><ToolbarTitle text="Login" style={style.decoration}/></Link>
                    </div>
                    )}
                    </ToolbarGroup>
                </Toolbar>
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

export default connect(mapStateToProps,mapDispatchToProps)(Nav)