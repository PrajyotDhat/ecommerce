import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RiDeleteBin5Line } from 'react-icons/ri'


const Cart = () => {
  const { products,totalPrice,totalQuantities } = useSelector(state => state.CartReducer);
  // console.log(products);
  // console.log(totalPrice);
  const dispatch = useDispatch();
  // const symbol = '₹'
  
  return (
    <div className='cart'>
      <div className="container">
        <h3>Cart</h3>
        {products.length > 0 ? <>
          <div className="row">
            <div className="col-9">
              <div className="cart-heading">
                <div className="row">
                  <div className="col-2">Image</div>
                  <div className="col-2">Name</div>
                  <div className="col-2">Price</div>
                  <div className="col-2">Quantity</div>
                  <div className="col-2">Total Price</div>
                  <div className="col-2">Remove</div>
                </div>
              </div>
              {products.map(product => (
                <div className="row vertical" key={product.id}>
                  <div className="col-2">
                    <div className="cart-image">
                      <img src={`${product.image}`} alt="" />
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="cart-name">
                      {product.name}
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="cart-price">
                      {product.price}
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="details-info">
                      <div className="details-incDec">
                        <span className="dec" onClick={() => dispatch({ type: 'DEC', payload: product.id })}>-</span>
                        <span className="quantity">{product.quantity}</span>
                        <span className="inc" onClick={() => dispatch({ type: 'INC', payload: product.id })}>+</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="cart-total ">
                      {/* {symbol.concat(getNum(product.price) * product.quantity)} */}
                      { product.price*product.quantity}
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="cart-remove" onClick={()=>dispatch({type:'REMOVE',payload:product.id})}>
                      <RiDeleteBin5Line size={30} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-3">
            <div className="summary">
            <div className="summary-heading">
              Summary
              </div>
              <div className="summary-details">
                <div className="row">
                  <div className="col-6">
                    Total Items:
                  </div>
                  <div className="col-6">
                    {totalQuantities}
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    Total Price:
                  </div>
                  <div className="col-6">
                  {totalPrice}
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </> : 'Cart is empty'}
      </div>
    </div>
  )
}

export default Cart
