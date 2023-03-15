import React from 'react'
import logo from './logo.svg'
import { GrCart } from "react-icons/gr";
import { useGlobalContext } from './context';

function Navbar() {
  const {amount} = useGlobalContext();
  return (
    <div className='nav-container'>
      <div className='header'>
        <img src={logo} />
      </div>
      <div className='amount-cart-total'>
        <GrCart/>
        <div className='amount'>{amount}</div>
      </div>
    </div>
  )
}

export default Navbar
