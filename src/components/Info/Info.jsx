import React from 'react';

const Info = (props) => {
  const {Area, Name, Category} = props.info;
  return (
    <div>

   <h1 className='text-center text-2xl font-semibold text-white'>Meal Information</h1>
      <hr />
     <div className='text-xl font-semibold pl-2 text-white my-6'>
     <p>Name: {Name}</p>
      <p>Area: {Area}</p>
      <p>Category: {Category}</p>
     </div>
    </div>
  );
};

export default Info;