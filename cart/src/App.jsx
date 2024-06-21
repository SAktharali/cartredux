import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import CartDetails from './CartDetails'
import {Provider} from 'react-redux'
import { store } from './store/store'
// import NavBar from './navbar/NavBar'
import {Toaster} from 'react-hot-toast';
import CheckoutPage from './CheckOutPage'
const App = () => {
  return (
   
    <Provider store={store}>
      {/* <NavBar/> */}
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<CartDetails/>}/>
      <Route path='/cart/:foodId' element={<CheckoutPage/>}/>
    </Routes>
    </Provider>
  
  )
}

export default App