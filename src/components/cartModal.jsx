import React from 'react';
import MyIcon from '../assets/removeCart.svg';
import { useCart } from '../components/cartContext';
import Buy from '../assets/buy.svg';
import { FaTrashAlt } from 'react-icons/fa'; // Importar el icono del tachito

function CartModal() {
  const { cartItems, removeFromCart } = useCart();
  const total = cartItems.reduce((acc, item) => acc + item.price * item.cantidad, 0);

  const removeCart = () => {
    console.log("Vaciar carrito");
    cartItems.forEach(item => removeFromCart(item.id));
    console.log(cartItems)
  };
 
  

  return (
    <div className="absolute z-10 inset-x-0 mx-auto mt-6 sm:mt-2 w-full sm:max-w-md p-2 bg-gray-500 shadow-lg rounded-3xl">
      <div className="grid grid-cols-4 gap-2 text-white bg-black px-1 py-0.5 text-xs sm:text-sm rounded-t-xl font-bold">
        <span>Producto</span>
        <span className="flex justify-center">Cantidad</span>
        <span className="flex justify-center">Precio</span>
        <span className="flex justify-center">SubTotal</span>
      </div>

      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={index} className={`grid grid-cols-4 items-center mt-1 ${index < cartItems.length - 1 ? "border-b border-gray-200 pb-1" : ""}`}>
            <span className="text-black font-bold">{item.nameProduct}</span>
            <div className="flex justify-center">
              <span className="text-black font-bold">{item.cantidad}</span>
            </div>
            <div className="flex justify-center">
              <span className="text-black font-bold">${item.price}</span>
            </div>
            <div className="flex justify-end items-center">
              <span className="text-black font-bold">${(item.price * item.cantidad).toFixed(2)}</span>
              <button onClick={() => removeFromCart(item.id)} className="ml-1 text-red-500 hover:text-red-700 font-bold">
                <FaTrashAlt style={{ color: 'white' }} /> {/* Utilizar el icono del tachito con color blanco */}
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-white">Tu carrito está vacío</p>
      )}

      <div className="flex justify-between text-white bg-black px-1 py-0.5 text-xs sm:text-sm mt-1 font-bold rounded-b-xl">
        <span>Total: </span>
        <span className="text-right flex-grow mr-1">${total.toFixed(2)}</span>
      </div>
      <div>
        <button onClick={removeCart}  className="bg-red-600 text-white w-full py-2 font-bold flex flex-row justify-center items-center gap-4">
          <img src={MyIcon} alt={MyIcon} width="24" height="24"/>
          Vaciar carrito
        </button>
      </div>
      <div>
        <button className="bg-lime-600  text-white w-full py-2 font-bold flex flex-row justify-center items-center gap-4 rounded-b-xl">
          <img src={Buy} alt={Buy} width="24" height="24"/>
          Finalizar compra
        </button>
      </div>
    </div>
  );
}

export default CartModal;
