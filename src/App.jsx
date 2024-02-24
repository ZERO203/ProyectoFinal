
import Navbar from './components/navbar'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layaut from './components/layaut'
import Footer from './components/footer'
import Products from './pages/products'
import Contact from './pages/contact'
import About from './pages/about'
import Account from './pages/account'
import Home from './pages/Home'
import ProductAdmin from './admin/productsAdmin'
import { CartProvider } from './components/cartContext'


function App() {
  return(
    <>  
      <div className="bg-gray-400 min-h-screen">

        <CartProvider>
        <Navbar></Navbar>
        <Layaut>
        
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/productos" element={<Products></Products>}></Route>
            <Route path="/contacto" element={<Contact></Contact>}></Route>
            <Route path="/nosotros" element={<About></About>}></Route>
            <Route path="/mi-cuenta" element={<Account></Account>}></Route>
            <Route path="/admin" element={<ProductAdmin></ProductAdmin>}></Route>
            <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
          </Routes>
        
        </Layaut>
        <Footer></Footer>
        </CartProvider>

      </div>
    </>
  )
}

export default App
