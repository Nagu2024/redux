import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from './Home'
import Create from './Create'
import Edit from './Edit'
import Header from './Header'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/create' element={<Create />}></Route>
      <Route path='/edit/:id' element={<Edit />}></Route>
      <Route path='/header' element={<Header />}></Route>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App