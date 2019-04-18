import 'materialize-css/dist/css/materialize.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import App from './components/App'
import reducers from './reducers'

const store = createStore(reducers, applyMiddleware())

// first arg is what to render, and second arg is where to render it.
// public/index.html contains the root structure of the page
// Provider tag is a react component that makes the redux store available to all children and refreshes stuff
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)
