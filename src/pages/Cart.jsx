import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import { NavLink } from 'react-router-dom'


function Cart() {
  const cart = useSelector(state => state.cart)
  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,item) => acc+item.price,0) )
  }, [cart])

  return (
    <div>
      {
        cart.length === 0? 
        (
          <div>
            <h2>Cart is empty</h2>
            <NavLink to='/'>
              <button>Shop Now</button>
            </NavLink>
          </div>
        ): 
        (
          <div>
            <div>
              {
                cart.map((item) => (
                  <CartItem key={item.id} data={item}/>
                ))
              }
            </div>
            <div>

              <div>
                <div>Your Cart</div>
                <div>Summary</div>
                <p>
                  <span>Total Items : {cart.length}</span>
                </p>
              </div>

              <div>
                <p>Total Amount : INR {totalAmount}</p>
                <button>Checkout</button>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Cart