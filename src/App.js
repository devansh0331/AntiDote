import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { Login } from './components/Login'
import { Signup } from './components/Signup'
import { NotFound } from './components/NotFound'
import { AddProducts } from './components/AddProducts'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element = {<Home/>}/>
        <Route path="/signup"element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/add-products" element={<AddProducts/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App