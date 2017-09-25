import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Provider } from 'react-redux'
import { setCurrentUser } from './actions/userActions'
import axios from 'axios'
import store from './store'

import App from './app'

if (localStorage.token) {
    const token = localStorage.token
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    store.dispatch(setCurrentUser(token))
  }else{
    delete axios.defaults.headers.common['Authorization'];
  }

const root = document.getElementById('root')

ReactDOM.render(
<MuiThemeProvider >
    <Provider store={store}>
        <App />
    </Provider>
</MuiThemeProvider>,
root
)