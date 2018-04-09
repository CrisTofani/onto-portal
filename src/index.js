import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

// CoreUI Styles
// import 'flag-icon-css/css/flag-icon.min.css'
import 'font-awesome/css/font-awesome.min.css'
// import 'simple-line-icons/css/simple-line-icons.css'
import '@coreui/ajax/AJAX_Full_Project_GULP/src/css/style.min.css'
import '@coreui/react/React_Full_Project/scss/core/_dropdown-menu-right.scss' // Temp fix for reactstrap
//

import store from './configureStore'
import AppRouter from './AppRouter.jsx'

ReactDOM.render(
  React.createElement(
    Provider, { store: store }, React.createElement(AppRouter)
  ),
  document.getElementById('appRoot')
)
