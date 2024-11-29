import Navbar from './components/navbar/navbar'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/users/login'
import Services from './ui/sellerServices/services'
import SignupPage from './pages/users/signup'
import Homepage from './pages/homepage'
import ProductDetails from './pages/products/productDetail'
import CartPage from "./pages/cardItems/addToCard"


function App() {
  

  return (
    <div>
     <Navbar/>
     
        <Routes>
          <Route path='/' element={<Homepage/>}>
          <Route path='/searchPage'/>
          </Route>
          <Route path='/loginPage' element={< LoginPage/>} />
          <Route path='/productdetails/:id' element={<ProductDetails/>}/>
          <Route path='cardItemPage' element={<CartPage/>}/>
          <Route path='/signup' element={<SignupPage/>}/>
          <Route path='/services' element={< Services />}/>
          
        </Routes>
    </div>
     
  )
}

export default App

