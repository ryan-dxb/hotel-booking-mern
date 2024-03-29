import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>} />
      </Routes>
    </Router>
  )
}

export default App