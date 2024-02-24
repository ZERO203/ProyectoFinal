import React, { useState } from 'react';
import SignInForm from '../components/signinform';
import SignUpForm from '../components/signupform';
import Fondo from '../assets/fondo.png';



function Account() {
  const [isSigningUp, setIsSigningUp] = useState(false); // Estado para controlar qué formulario mostrar

  return (
    <section className="bg-cover " style={{ backgroundImage: `url(${Fondo})` }}>
  <div className="container flex items-center justify-center min-h-screen px-6 mx-auto ">
    <div>
      <div className="flex items-center justify-center mt-24">
        <button
          onClick={() => setIsSigningUp(false)}
          className={`w-32 pb-1 font-bold text-center mt-2 ${
            isSigningUp
              ? "hover:text-green-500 border-b  text-gray-200"
              : "text-green-500 border-b-4 border-green-400  dark:text-white"
          } transition-all duration-300 ease-in-out`}
        >
          Iniciar Sesion
        </button>

        <button
          onClick={() => setIsSigningUp(true)}
          className={`w-32 pb-1 font-bold text-center mt-2 ${
            isSigningUp
              ? "text-green-500 border-b-4 border-green-400"
              : "hover:text-green-500 border-b  text-gray-200"
          } transition-all duration-300 ease-in-out`}
        >
          Registrate
        </button>
      </div>

      {isSigningUp ? <SignUpForm /> : <SignInForm />}
    </div>
  </div>
</section>

  );
}

export default Account;
