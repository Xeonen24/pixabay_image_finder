import React from 'react'
import Main from './Components/Main'
import TopButton from './Components/TopButton'
import FullImage from './Components/FullImage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <TopButton />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/image/:id" element={<FullImage />} />
      </Routes>
    </BrowserRouter>
  )
}

