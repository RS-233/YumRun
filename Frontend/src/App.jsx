import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import Footer from './Components/Footer/Footer'
import Login from './Components/Login/Login'
import PlaceOrder from './pages/placeorder/PlaceOrder'
import Verify from './pages/verify/Verify'
import MyOrders from './pages/MyOrder/MyOrders'
import Test from './pages/Test'

const App = ({}) => {
  
  const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/verify' element={<Verify/>}/>
          <Route path='/myorders' element={<MyOrders/>}/>
          <Route path='/Test' element={<Test/>}/>
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
