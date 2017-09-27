const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')

const booksRoutes = require('./server/routes/booksRoutes.js')
const userRoutes = require('./server/routes/userRoutes')

const app = express()
mongoose.connect('mongodb://localhost:27017/bookdb'||process.env.MONGOLAB_URL)
app.use(express.static(path.join(__dirname,'dist')))



app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(userRoutes, booksRoutes)

app.route('*').get((req,res)=>{
    res.sendFile(path.join(__dirname + '/client/assets/index.html'))
})

const port = process.env.PORT || 8080
app.listen(port,()=>{
    console.log('app listen on port' + port)
})

