import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

import "./styles/index.css";
import { Context } from './config/context.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Context>
        <App />
      </Context>
    </BrowserRouter>
)
