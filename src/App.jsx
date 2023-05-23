import React from "react"
import{Route, Routes} from 'react-router-dom'
import './App.css'
import NavBar from './components/includes/NavBar'
import Index from './pages/Index'
import ProductPage from './pages/ProductPage'
import ServicePage from './pages/ServicePage'
import SinglePage from './pages/SinglePage'
function App() {
 

  return (
    <main>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/products" element={<ProductPage/>} />
        <Route path="/services" element={<ServicePage/>} />
        <Route path="/single" element={ <SinglePage/> } />
      </Routes>
    </main>
  )
}

export default App
