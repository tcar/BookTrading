import React, { Component } from 'react'
import { connect } from 'react-redux'

import {  } from '../actions/userActions'
class About extends Component{
    constructor(){
        super()

    }

    render(){
        
        return(
            <div>
                <h2>about</h2>
            </div>
        )
    }

   


}

const mapStateToProps = (state)=>{
    return{

    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(About)

