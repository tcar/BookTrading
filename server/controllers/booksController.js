const axios = require('axios')
const Book = require('../models/bookModel')
const User = require('../models/userModel')
module.exports={
    books:async(req,res,next)=>{
        const books = await axios({
            method:'get',
            url:'https://www.googleapis.com/books/v1/volumes?q=' + req.body.book
        })

        res.send(books.data.items)
    },

    addBook:async(req,res,next)=>{
        const user = await User.findOne({_id:req.user._id}).populate('books')
        const newBook = new Book()
        Object.assign(newBook,req.body)
        newBook.book_owner = req.user._id
        await newBook.save()
        user.books.push(newBook._id)
        await user.save()
        const userr = await User.findOne({_id:req.user._id}).populate('books')
        res.send(userr.books)
 
    },
    deleteBook:async(req,res,next)=>{
        const book = await Book.remove({_id:req.body.id})
        const userr = await User.findOne({_id:req.user._id}).populate('books')
        res.send(userr.books)
    },
    tradeRequest:async(req,res,next)=>{
        const trade = req.body
        const requestsForYou = {
            book:req.body.book,
            from:req.user._id
        }
        const user = await User.findOne({_id:req.user.id})
        const trader = await User.findOne({_id:req.body.for})
        trader.requests_for_you.push(requestsForYou)
        await trader.save()
        user.trade_requests.push(req.body)
        console.log(user.trade_requests)
        await user.save()
        res.send(trader)

    },
    mybooks:async(req,res,next)=>{
        const user = await User.findOne({_id:req.user._id}).populate('books')
        res.send(user.books)
    },

    //test
    allBooks:async (req,res,next)=>{
        const books = await Book.find({}).populate('book_owner')
        res.send(books)
    }



}