import React from 'react';

function Fruit(props) {
  const { name, addToCart } = props;
  return (
    <div>
      <span>{name}</span>
      <button onClick={evt => addToCart(name)}>Add To Cart</button>
    </div>
  );
}

export default Fruit;
