import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Coin from './pages/Coin'
import Features from './pages/Features'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
const App = () => {

  return (
    <>
    <div className="app">
    <Navbar/>

    <div className="w-10/12 m-auto">
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/coin/:coinId' element={<Coin/>}/>
      <Route path='/features' element={<Features/>}/>
    </Routes>

    <Footer/>
    </div>
    </div>
    </>
  )
}

export default App