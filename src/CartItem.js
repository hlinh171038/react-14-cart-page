import React from 'react'
import {FcPrevious,FcNext} from 'react-icons/fc'
import { useGlobalContext } from './context'

function CartItem({...product}) {
    const {cartRemoveItem,toggle,changePrice} = useGlobalContext();
    const {id,title,price,img,amount} = product
  return (
            <tr>
                <td className='item-infos td-width'>
                    <img  className="infos-img" src={img}/>
                    <div className='infos-right'>
                        <p className='infos-title'>{title}</p>
                        <button className='delete-btn' onClick={() =>cartRemoveItem(id)}>Delete</button>
                    </div>
                </td>
                <td className='item-price td-width'>
                    {price} VND
                </td>
                <td className='item-quantity td-width'>
                    <button className='pre-btn-cart' onClick={()=>toggle(id,'dec')} >
                        <FcPrevious/>
                    </button>
                    <span className='num'>{amount}</span>
                    <button className='next-btn-cart' onClick={()=>toggle(id,'inc')}>
                        <FcNext/>
                    </button>
                </td>
                <td className='item-total-price td-width'>
                    {price} VND
                </td>
            </tr>
       
   
  )
}

export default CartItem
