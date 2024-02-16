import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './Header.jsx'
import './index.css'
import Footer from './Footer.jsx'
import Navi from './Navi.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navi/>
    <Header/>
    <App/>
    <Footer/>
  </React.StrictMode>,
)
