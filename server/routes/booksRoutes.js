const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const booksController = require('../controllers/booksController')

router.route('/books')
    .post(userController.authenticate,booksController.books)
router.route('/addbook')
    .post(userController.authenticate,booksController.addBook)
router.route('/deletebook')
    .delete(userController.authenticate,booksController.deleteBook)
router.route('/trade')
    .post(userController.authenticate,booksController.tradeRequest)
router.route('/mybooks')
    .get(userController.authenticate,booksController.mybooks)
router.route('/accept')
    .post(userController.authenticate,booksController.accept)
//test
router.route('/allbooks')
    .get(userController.authenticate,booksController.allBooks)
router.route('/books')
    .delete(booksController.deleteBooks)

module.exports = router