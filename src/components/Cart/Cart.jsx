import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Cart.css';

const Cart = (props) => {
  const {strArea, strCategory, strMeal, strMealThumb} = props.meal;
  const handleAddToCart = props.handleAddToCart;
  return (
    <div>
    <div className="card w-full min-h-full bg-base-100 shadow-xl">
  <figure><img className='w-[96%] mt-2 rounded' src={strMealThumb} alt="strMealThumb" /></figure>
  <div className="card-body">
    <h2 className="card-title">{strMeal}</h2>
    <p><span className='text-xl font-semibold'>Area:</span> {strArea}</p>
    <p className='text-xl'><span className='text-xl font-semibold'>Category</span>: {strCategory}</p>
  </div>
  <button onClick={()=> handleAddToCart(props.meal)} className="btn bg-red-400 text-xl">Add to Cart <span className='ml-3'><FontAwesomeIcon icon={faShoppingCart} /></span></button>
</div>
    </div>
  );
};

export default Cart;