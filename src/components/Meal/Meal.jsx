import { info } from 'autoprefixer';
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Info from '../Info/Info';
import './Meal.css';

const Meal = () => {
const [meals, setMeals] = useState([]);
const [info, setInfo] = useState({});
useEffect(()=>{
  fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
  .then(res => res.json())
  .then(data => setMeals(data.meals))
},[]);

const handleAddToCart = (meal) =>{
setInfo({
  Name: meal.strMeal,
  Area: meal.strArea,
  Category: meal.strCategory
})
}

  return (
   <div className='meal-container'>
     <div className='grid grid-cols-3 gap-4 my-5 pl-5'>
   {
    meals.map(meal => <Cart
      key = {meal.idMeal} 
      handleAddToCart = {handleAddToCart}
      meal = {meal}/>)
   }
    </div>
    <div className='bg-slate-600 ml-4 product-info'>
    <Info info = {info}/>
    </div>
   </div>
  );
};

export default Meal;