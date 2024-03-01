import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

function AccountOptions({ onClose }) {

  const [showOptions, setShowOptions] = useState(false);
  const optionsRef = useRef(null);

  useEffect(() => {

    function handleClickOutside(event) {
      if (optionsRef.current && !optionsRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    }
    

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

  }, [optionsRef]);

    return (
      <div ref={optionsRef} className="absolute z-10 right-0 py-2 sm:mt-2 w-11/12 sm:w-48 bg-gray-500 shadow-lg rounded-2xl flex flex-col ">
        <NavLink to="/ingresar" onClick={() => onClose(false)} className=" text-white bg-gray-800 hover:bg-green-500 text-center py-1 text-sm sm:text-base rounded-xl font-bold mr-2 ml-2 ">Ingresar</NavLink>
        <NavLink to="/registro" onClick={() => onClose(true)} className=" text-white bg-gray-800 hover:bg-green-500 text-center py-1 text-sm sm:text-base mt-1.5 rounded-xl font-bold mr-2 ml-2">Registro</NavLink>
      </div>
    );
    
  }
  
  export default AccountOptions;
  