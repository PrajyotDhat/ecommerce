import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Home = () => {

    const {products}=useSelector(state => state.ProductReducer);
    // console.log(products);
    
    return (
        <div className='main'>
            <div className="container">
                <div className="row">
                    {products.map(product=>(
                        <div className="col-3" key={product.id}>
                            <div className="product">
                            <div className="column">
                            <div className="card">
                                <div className="product-image">
                                <Link to={`/details/${product.id}`}>
                                    <img src={`${product.image}`} alt="image name" />
                                </Link>
                                </div>
                                <div className="product-name">
                                    {product.name}
                                </div>
                                 <div className="product-price">
                                    {product.price}
                                </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                           
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home
