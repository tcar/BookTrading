import React, { Component } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import Star from 'material-ui/svg-icons/toggle/star';

import {  } from '../actions/userActions'
class Home extends Component{
    constructor(){
        super()

    }

    render(){
        
        const style = {
            align:{
                textAlign:'center'
            },
       
        }

        return(
            <div className='Home'>

                <div style={style.align} className='row'>
                    <div className='col s12'>
                        <h1>Welcome to booktrade</h1>
                        <h2>easyest way to trade books</h2>
                    </div>
                </div>

                <div className='row'>
                    <div className='col s4'>
                        
                        <h2><Star color='#ffbf00'/>Catalogue your books online</h2>
                        <h2><Star color='#ffbf00'/>Easy manage books and requests from your dashboard</h2>
                            
                    </div>
                    <div className='col s4'>
                    
                    <h2><Star color='#ffbf00'/>See all books our users own</h2>
                    <h2><Star color='#ffbf00'/>Request to borow other users' books</h2>
                        
                </div>
                <div className='col s4'>
                        
                        <h2><Star color='#ffbf00'/>No need to manually enter descriptions or add photo's.</h2>
                        <h2><Star color='#ffbf00'/>We use the massive Google Books API. Any book you want to add, we have it.</h2>
                            
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)

