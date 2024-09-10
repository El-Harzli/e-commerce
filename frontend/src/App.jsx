import React from 'react'
import Main from './Pages/Main'
import Header from './Components/Header/Header'
import ProductDetail from './Pages/ProductDetail'
import NotFound from './Pages/NotFound'
import { useEffect } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);

  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/product-details/:productId' element={<ProductDetail />} />
        <Route path='/*' element={<NotFound />}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App