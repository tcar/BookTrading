import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Provider } from 'react-redux'
import store from './store'

import App from './app'

const muiTheme = getMuiTheme({
    fontFamily: 'Tangerine, cursive',
    palette: {
      
      alternateTextColor:'#e5e5e5' ,
     
    },
   
  });
  


const root = document.getElementById('root')

ReactDOM.render(
<MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
        <App />
    </Provider>
</MuiThemeProvider>,
root
)