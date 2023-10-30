import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Regis from './pages/Regis'
import { Route, Routes,Link } from 'react-router-dom'

const Main = () => {
  return (
    <div>
<Routes>
    <Route path="/" element={<Regis/>}  />
    <Route path="/home" element={<Home/>} />
    <Route path="/Login" element={<Login/>}  />
   

   
</Routes>
    </div>
  )
}

export default Main