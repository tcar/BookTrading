import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from './reducers/index'

const store = createStore(
    reducers,
    applyMiddleware(logger,thunk)
)

module.exports=store