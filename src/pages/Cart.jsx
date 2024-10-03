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
    <div className='max-w-[1200px] flex flex-col mx-auto md:flex-row justify-center'>
      {
        cart.length === 0? 
        (
          <div className='flex flex-col h-[80vh] justify-center items-center gap-y-5'>
            <h2 className='text-xl font-bold mb-4 font-mono'> Your Cart is Empty!</h2>
            <NavLink to='/'>
            <button className='py-3 px-12 font-bold rounded-lg text-xl bg-green-600 uppercase text-white hover:bg-zinc-100 hover:text-green-600 transition duration-300 border-2 border-green-600'>Shop Now</button>
            </NavLink>
          </div>
        ): 
        (
          <div className='flex md:flex-row flex-col'>
            <div className='w-[100%] md:w-[60%] flex flex-col p-2' >
              {
                cart.map((item) => (
                  <CartItem key={item.id} data={item}/>
                ))
              }
            </div>
            <div className='flex flex-col p-5 gap-5 mt-5 md:w-[40%] w-[100%] h-[98%] justify-between'>

            <div className='flex flex-col gap-5'>
                <div className='font-semibold text-xl uppercase text-green-800'>Your Cart</div>
                <div className='text-5xl uppercase font-bold text-green-700  -mt-5'>Summary</div>
                <p className='text-xl'>
                  <span className='text-gray-700 font-semibold text-xl'>Total Items : {cart.length}</span>
                </p>
              </div>

              <div className='flex flex-col'>
                <p className='text-xl font-bold'>
                  <span className='text-gray-700 font-semibold'>Total Amount : ₹ {totalAmount}</span>
                </p>
                <button className='bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-200 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl'>
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )
      }
      </div>
  )
}

export default Cart