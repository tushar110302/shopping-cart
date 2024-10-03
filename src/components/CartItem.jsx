import React from 'react'
import { FcDeleteDatabase } from 'react-icons/fc'
import { useDispatch } from 'react-redux'
import { remove} from "../redux/slice/CartSlice"
import toast from 'react-hot-toast'


function CartItem({data}) {
    const dispatch = useDispatch()
    function removeFromCart(){
        dispatch(remove(data.id))
        toast.success("Removed from cart")
    }
  return (
    <div>
        <div>
            <img src={data.image} />
        </div>
        <div>
            <h1>{data.title}</h1>
            <h1>{data.description}</h1>
            <div>
                <p>{data.price}</p>
                <div onClick={removeFromCart}> <FcDeleteDatabase/> </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem