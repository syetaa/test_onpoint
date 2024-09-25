import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Home from '../components/Home/Home'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'



function App() {
  

  return (
    <>
      <div className='textmain'>
        {/* <div className="header">
          <Header/>
        </div> */}
        <div className="main">
          <Home/>
        </div>
        {/* <div className="footer">
          <Footer/>
        </div> */}
      </div>
    </>
  )
}

export default App
