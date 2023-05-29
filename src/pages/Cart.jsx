import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { decrementQuantity, deleteItem, incrementQuantity, resetCart } from '../Redux/amazonSlice';


function Cart() {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.amazonReducer.products)
  const [TotalPrice, setTotalPrice] = useState("")
  useEffect(() => {
    let Total = 0;
    products.map((item) => {
      Total += item.price * item.quantity;
      return setTotalPrice(Total.toFixed(2))
    })
  }, [products])
  return (
    <div className='cart-d-main'>
      <div className='cart-inner-d container'>
        <div className='cart-product '>
          {/* Cart Heading */}
          <div className='p-heading'>
            <h2 className='shopping-title'>Shopping Cart</h2>
            <h4 className='sub-total-title'>Sub-Total</h4>
          </div>
          {/* Cart Products */}

          <div>
            {
              products.map((item) => (
                <div key={item.id} className='cart-d-image'>
                  <div className='div-1'>
                    <div className='cart-image-div'>
                      <img className='cart-image' src={item.image} alt="Product" />
                    </div>
                    <div className='div-2'>
                      <h2 className='item-title'>{item.title}</h2>
                      <p className='item-des'>{item.description.substring(0, 200)}... </p>
                      <p className='item-price-des '>Unit price
                        <span className='item-price'>${item.price}</span>
                      </p>
                      <div className='quantity'>
                        <p>Qty:</p>
                        <p onClick={()=>dispatch(decrementQuantity(item.id))} className='plus-minus'>-</p>
                        <p>{item.quantity} </p>
                        <p onClick={()=>dispatch(incrementQuantity(item.id))} className='plus-minus'>+</p>

                      </div>
                      <button onClick={()=>dispatch(deleteItem(item.id))} className='delete-cart'>Delete Item</button>
                    </div>
                    <div>
                      <p className='total-price'>${item.price * item.quantity}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>


          {/* Cart Delete */}
          <div className='clear-cart-div py-2'>
            <button onClick={()=> dispatch(resetCart())} className='clear-cart'>Clear Cart</button>
          </div>
        </div>
        <div className='cart-price'>
          <div>
            <p className='total-order-des'>
              <span><CheckCircleIcon className='tick-icon' /></span>{""}
              Your order qualifies for Free Shipping
              choose this option at checkout. See details...
            </p>
          </div>
          <div>
            <p className='total-order-price'>Total:
              <span className='t-o-price'>${TotalPrice}</span></p>
          </div>
          <button className='place-order-b'>Place Order</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
