import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { Login } from './components/Login'
import { Signup } from './components/Signup'
import { NotFound } from './components/NotFound'
import { AddProducts } from './components/AddProducts'
import DiseasePage  from './components/diseasePage'
import CovidDiseasePage  from './components/CovidDiseasePage'
import CancerDiseasePage  from './components/CancerDiseasePage'
import ViralDiseasePage  from './components/ViralDiseasePage'
import TyphoidDiseasePage  from './components/TyphoidDiseasePage'
import AidsDiseasePage  from './components/AidsDiseasePage'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element = {<Home/>}/>
        <Route path="/signup"element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/diseasepage" element={<DiseasePage/>}/>
        <Route path="/cancerdiseasepage" element={<CancerDiseasePage/>}/>
        <Route path="/coviddiseasepage" element={<CovidDiseasePage/>}/>
        <Route path="/viraldiseasepage" element={<ViralDiseasePage/>}/>
        <Route path="/typhoiddiseasepage" element={<TyphoidDiseasePage/>}/>
        <Route path="/aidsdiseasepage" element={<AidsDiseasePage/>}/>
        <Route path="/add-products" element={<AddProducts/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App