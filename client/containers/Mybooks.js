import React, { Component } from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import {List, ListItem} from 'material-ui/List';
import { search, mybooks, addBook,deleteBook } from '../actions/booksActions'
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';

import Card from '../components/card'
import Books from '../components/Books'

class Mybooks extends Component{
    constructor(){
        super()
        this.state={
            book:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.search = this.search.bind(this)
        this.mybooks = this.mybooks.bind(this)
        this.addBook = this.addBook.bind(this)
        this.deleteBook = this.deleteBook.bind(this)
    }

    render(){

        const books = this.props.books.map((book)=>{
            return (
                <Card key={book.id} addBook={this.addBook} book ={book}/>
            )
        })
        

        return(
            <Tabs>
                <Tab label='add book'>
                    <div>
                        <h2>add book</h2>
                        <TextField 
                        name='book'
                        hintText='search'
                        value={this.state.book}
                        onChange={(e)=>{this.handleChange(e)}}
                        />
                        <RaisedButton onClick={()=>{this.search()}} label='search'
                        />
                        <List >
                            <div className='row'>
                            {books}
                            </div>
                        </List>

                    </div>
                </Tab>
                <Tab label='my books'> 
                    <div>
                        <h2>my books</h2>
                        <Books mybooks = {this.mybooks} books={this.props.ownbooks} deleteBook = {this.deleteBook} />

                    </div>
                </Tab>
                <Tab label='your trade requests'> 
                    <div>
                        <h2>your trade requests</h2>
                    </div>
                </Tab>
                <Tab label='trade requests for you'> 
                    <div>
                        <h2>trade requests for you</h2>
                    </div>
                </Tab>
            </Tabs>


        )
    }
    handleChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    search(){
        const book = {
            book:this.state.book
        }
        this.props.search(book)
    }
    mybooks(){
        this.props.mybooks()
    }
    addBook(title, authors,description,img){
        const book={
            title:title,
            authors:authors,
            description:description,
            image:img
        }
        this.props.addBook(book)
    }
    deleteBook(id){
        const book = {
            id:id
        }
        this.props.deleteBook(book)
    }

   


}

const mapStateToProps = (state)=>{
    return{
        books:state.book.books,
        ownbooks:state.book.mybooks

    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        search:(book)=>{
            dispatch(search(book))
        },
        mybooks:()=>{
            dispatch(mybooks())
        },
        addBook:(book)=>{
            dispatch(addBook(book))
        },
        deleteBook:(id)=>{
            dispatch(deleteBook(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Mybooks)

