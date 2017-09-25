import React, {Component} from 'react'
import {List, ListItem} from 'material-ui/List';

import BookTemplate from './bookTemplate'
export default class Books extends Component{
    componentWillMount(){
       this.props.mybooks()
    }
    render(){
        console.log(this.props.books)
        
        const books = this.props.books.map((book)=>{
            return <BookTemplate key={book._id} deleteBook = {this.props.deleteBook} info={book}/>
        })
        return(
            <div>
                <List>
                    <div className='row'>
                    {books}
                    </div>
                </List>
            </div>
        )
    }
}