import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const Details = () => {
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    // console.log(id);
    const dispatch = useDispatch();
    const { product } = useSelector(state => state.ProductReducer);
    // console.log(product);
    useEffect(() => {
        dispatch({ type: 'PRODUCT', id })
    }, [id])
    const decQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
    return (
        <div className='container mt-1'>
            <div className="row">
                <div className="col-6">
                    <div className="details-image">
                        <img src={`${product.image}`} alt="image" />
                    </div>
                </div>
                <div className="col-6">
                    <div className="details-name">
                        {product.name}
                    </div>
                    <div className="details-price">
                        <span className='details-actual'>{product.price}</span>
                    </div>
                    <div className="details-info">
                        <div className="details-incDec">
                            <span className="dec" onClick={decQuantity}>-</span>
                            <span className="quantity">{quantity}</span>
                            <span className="inc" onClick={() => setQuantity(quantity + 1)}>+</span>
                            <button className='btn-default' onClick={() => dispatch({ type: 'ADD_TO_CART', payload: { product, quantity } })}>Add To Cart</button>
                        </div>
                    </div>
                    <div className="details-desc">
                        <h4>Details</h4>
                        {product.desc}
                    </div>
                </div>
            </div>
            <h1>Details</h1>
        </div>
    )
}

export default Details
