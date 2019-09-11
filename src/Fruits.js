import React from 'react';
import Fruit from './Fruit';

function Fruits(props) {
  const { fruits, addToCart } = props;
  return (
    <>
      {
        fruits.map(
          (fruitName) => (
            <Fruit
              key={fruitName}
              name={fruitName}
              addToCart={addToCart}
            />
          ))
      }
    </>
  )
}

export default Fruits;
