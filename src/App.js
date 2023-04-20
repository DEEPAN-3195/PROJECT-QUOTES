import React from 'react'
import DrawerAppBar from './nav'
import Home from './Components/Home'
import Quotes from './Components/Quotes'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ColorSchemesExample from './nav'
import Footer from './Components/Contact'

export default function App() {
  return (
    <div>
        <ColorSchemesExample/>
        
        
        <BrowserRouter>
           <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/quote' element={<Quotes/>}/>
            {/* <Route exact path='/contact' element={<Footer/>}/> */}
           </Routes>
        </BrowserRouter>
        <Footer/>
    </div>
  )
}
