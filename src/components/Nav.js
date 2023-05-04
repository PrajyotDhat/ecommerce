import React from 'react'
import { Link } from 'react-router-dom'
import { RiShoppingCartFill } from "react-icons/ri";
import { useSelector } from 'react-redux';

const Nav = () => {
  const { totalQuantities } = useSelector(state => state.CartReducer)
  // console.log(totalQuantities);
  // const {product} = useSelector(state =>state.CartReducer)
  return (
    <div className='nav'>
      <div className="container">
        <div className="nav_container">
          <div className="nav_left">
            <Link to="/"><img src="https://images.freeimages.com/images/previews/09e/moon-art-1641879.png" alt="" />
            </Link>
          </div>
          <div className="nav_right">
            <Link to="/cart">
              <div className="basket">
                <RiShoppingCartFill size={30} />
                <span>{totalQuantities}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Nav
