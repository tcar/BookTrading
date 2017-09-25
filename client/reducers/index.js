import { combineReducers } from 'redux'
import user from './userReducer'
import book from './booksReducer'

export default combineReducers({
    user,
    book
})