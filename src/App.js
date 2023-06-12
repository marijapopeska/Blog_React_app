import React from 'react'

import Home from './pages/Home/Home'
import Blog from './components/Blog/Blog'

import { BrowserRouter, Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog/:id' element={<Blog/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
