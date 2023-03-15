import React,{} from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from './context' 

function CartContainer() {
  const {cart,clearAllCarts,total} = useGlobalContext();
  
  if(cart.length ===0){
    return <div className='carts-empty'>
              <h1>your cart</h1>
              <p className='carts-empty-content'>is currently empty</p>
          </div>
  }
  return (
    <div className='carts'>
      <div className='container-cart'>
        <h2 className='carts-title'>Your cart (4 item)</h2>
        <table  className='cart-items-container'>
              <tr>
                  <th>Item</th>
                  <th>price</th>
                  <th>quantity</th>
                  <th>total</th>
              </tr>
            {cart.map(product =>{
              return <CartItem key={product.id} {...product}/>
            })} 
          
      </table>
      <hr/>
        <div className='prices'>
          <p className='price-title'>total all prices</p>
          <p className='price'>{total} VND</p>
        </div>
      </div>
      <div className='clear-alls'>
        <button className='clear-all-carts' onClick={clearAllCarts}>clear all carts</button>
      </div>
    </div>
  )
}

export default CartContainer
