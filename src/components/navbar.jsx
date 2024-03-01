import { NavLink } from "react-router-dom"
import React, { useState } from 'react'
import { useCart } from '../components/cartContext'
import CartModal from './cartModal'
import AccountOptions from './accountOptions'

function Navbar() {

    const { cartItems } = useCart();
    const [isCartModalVisible, setIsCartModalVisible] = useState(false);
    const [showOptions, setShowOptions] = useState(false)

    const btnLink = "mr-5 hover:text-green-500 cursor-pointer font-bold " 
    const activeLink = "mr-5 text-green-500 cursor-pointer font-bold "
    
    // const btnLog = "inline-flex items-center mr-4 bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:text-green-500 rounded text-base mt-4 md:mt-0"
    // const btnGin = "inline-flex items-center mr-4 bg-gray-800 border-0 py-1 px-3 focus:outline-none text-green-500 rounded  mt-4 md:mt-0"

    const btnDash = "flex mx-auto text-white bg-black border-0 py-1 px-6 focus:outline-none hover:bg-green-500 rounded  font-bold"
    const btnBoard = "flex mx-auto text-white bg-black border-0 py-1 px-6 focus:outline-none bg-green-500 rounded  font-bold"

    
  return (

<header className="text-gray-100 bg-gray-700 body-font sticky top-0 w-full z-50">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-white">
    <svg width="45px" height="45px" viewBox="0 -117.5 1259 1259" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M393.644285 971.514095l472.373142 0 0 52.485905-472.373142 0 0-52.485905Z" fill="#17202A"></path><path d="M524.859047 652.399795h209.943618v345.357253h-209.943618z" fill="#AEB6BF"></path><path d="M708.559713 678.642747V970.989236h-157.457714V678.642747h157.457714m52.485905-52.485904H498.616094V1023.475141h262.429524V626.156843z" fill="#17202A"></path><path d="M26.242952 26.242952l1207.175808 0 0 734.802666-1207.175808 0 0-734.802666Z" fill="#000000"></path><path d="M1207.175807 52.485905v682.31676H52.485905V52.485905h1154.689902m0-52.485905H52.485905a52.485905 52.485905 0 0 0-52.485905 52.485905v682.31676a52.485905 52.485905 0 0 0 52.485905 52.485905h1154.689902a52.485905 52.485905 0 0 0 52.485905-52.485905V52.485905a52.485905 52.485905 0 0 0-52.485905-52.485905z" fill="#17202A"></path><path d="M52.485905 763.669913a26.242952 26.242952 0 0 1-26.242953-26.242952v-100.510508h1207.175808v100.248078a26.242952 26.242952 0 0 1-26.242953 26.242952z" fill="#AEB6BF"></path><path d="M1207.175807 663.159405v74.267556H52.485905v-74.267556h1154.689902m52.485905-52.485904H0v126.49103a52.485905 52.485905 0 0 0 52.485905 52.485905h1154.689902a52.485905 52.485905 0 0 0 52.485905-52.485905v-126.49103z" fill="#17202A"></path></g></svg>
      <span className="ml-6 text-xl">Kazali Store</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      
      <NavLink to="/" className={({isActive}) => isActive?activeLink:btnLink}>Inicio</NavLink>
      <NavLink to="/productos" className={({isActive}) => isActive?activeLink:btnLink}>Productos</NavLink>
      <NavLink to="/contacto" className={({isActive}) => isActive?activeLink:btnLink}>Contacto</NavLink>
      <NavLink to="/nosotros" className={({isActive}) => isActive?activeLink:btnLink}>Nosotros</NavLink>

        <div className="flex justify-center md:block">
          <button onClick={() => setIsCartModalVisible(!isCartModalVisible)} className="relative text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-green-500 dark:hover:text-gray-300 flex" href="#">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span className="mt-2 bg-gray-900 rounded-full w-6 h-6 flex flex-col font-bold">{cartItems.length}</span>
          </button>
          
          {isCartModalVisible && <CartModal />}
        </div>
        
    </nav>

    <NavLink to="/admin" className={({isActive}) => isActive?btnBoard:btnDash}>DASHBOARD</NavLink>
    <div className="relative">
    <button onClick={() => setShowOptions(!showOptions)} className=" inline-flex items-center mr-4 bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-green-500 text-base mt-4 md:mt-0 rounded-xl right-10 font-bold">
    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-7 h-7 ml-0 pr-2" viewBox="0 -1 30 30">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
    </svg>
        Mi cuenta
    </button>
    {showOptions && <AccountOptions onClose={(SignUp) => {
    setShowOptions(false)
  // Opcionalmente, puedes manejar la navegación aquí si decides hacer algo más al cerrar
    }} />}
    </div>
    
    
  </div>
</header>

  )
}

export default Navbar