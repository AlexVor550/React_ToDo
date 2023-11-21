import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home'
import './index.css'
import Header from './components/header/header'
import Layout from './components/Layout/Layout'
import Footer from './components/footer/footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Layout>
    <Home />
    </Layout>
    <Footer/>
  </React.StrictMode>,
)
