import React, { Component } from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import { update, handleChange } from '../actions/userActions'

class Settings extends Component{
    constructor(){
        super()
        this.state={
            city:'',
            state:'',
            name:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.submit = this.submit.bind(this)
    }
    

    render(){
        const style = {
            align:{
                textAlign: 'center'
            }
        }

        return(
            <div>
                <div className='row'>
                    <h1>Update profile</h1>
                    <form onSubmit={(e)=>{this.submit(e)}}>
                    <TextField 
                        id='name'
                        hintText='Name'
                        name='name'
                        onChange = {(e)=>{this.handleChange(e)}}
                        value={this.props.name}
                        /> <br />

                        <TextField 
                        id='city'
                        hintText='City'
                        name='city'
                        value={this.props.city}
                        onChange={(e)=>{this.handleChange(e)}}
                        /> <br />

                        <TextField 
                        id='state'
                        hintText='State'
                        name='state'
                        onChange = {(e)=>{this.handleChange(e)}}
                        value={this.props.state}
                        /> <br />
                        
                        <RaisedButton type='submit' label='update'></RaisedButton>
                    </form>
                    
              
                </div>
            </div>
        )
    }
handleChange(e){
    const value = e.target.value
    const name = document.getElementById('name').value
    const city = document.getElementById('city').value
    const state = document.getElementById('state').value
    const profile = {
        name:name,
        city:city,
        state:state
    }
    this.props.handleChange(profile)

}

submit(e){
    e.preventDefault()
    const data ={
        city:this.props.city,
        state:this.props.state,
        name:this.props.name
    }
    this.props.update(data)

}
   
}

const mapStateToProps = (state)=>{
    return{
        name:state.user.user.name,
        city:state.user.user.city,
        state:state.user.user.state
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        update:(data)=>{
            dispatch(update(data))
        },
        handleChange:(profile)=>{
            dispatch(handleChange(profile))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)

