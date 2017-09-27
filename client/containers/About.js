import React, { Component } from 'react'
import Avatar from 'material-ui/Avatar';
import profile from '../assets/tcar.jpg'
import logo from '../assets/logo.jpg'
import git from '../assets/git.png'

export default class About extends Component{
    render(){
        const style = {
            style:{
                height:'100vh',
                textAlign: 'center',
            },
            avatar:{
                width:'100px',
                size:'cover',
                boxShadow: '0px 0px 5px rgba(181, 176, 176, 0.74)',
                borderRadius: '50%'
            }
           
            
        }
        const style2 = {
            height:'100vh',
            textAlign: 'center',
            background:'#f2f2f2'
        }
        return(
            <div  className='About row '>
                <div style={style.style} className='col s6'>
                    <h1>Project</h1>
                    <img style={style.avatar} src={logo} />
                    <p>A freeCodeCamp full-stack project.</p>
                    <p>Using a tech stack of React + Redux + Node.js + Express + MongoDB</p>

                    <p>Other key packages used including Material-ui, React Router(v4
                        ), Mongoose, Passport, Webpack
                    </p>
                    <p>As an authenticated user, i can view all books posted by every user</p>
                    <p>As an authenticated user, i can add a new book.</p>
                    <p>As an authenticated user, i can update my settings to store my full name, city, and state.</p>
                    <p> As an authenticated user, i can propose a trade and wait for the other user to accept the trade.</p>
                    
                   
                </div>
                <div  style={style2} className='col s6'>
                    <h1>Author</h1>

                    <img style={style.avatar}  src={profile} />
                    <h2>Tihomir Car</h2>
                    <a  href='https://github.com/tcar'><img width='40' src={git}/></a>
                </div>


             
            </div>
        )
    }
}