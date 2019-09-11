import React, { useState } from 'react';
import './App.css';

const fruitsApi = 'http://localhost:4000/market/fruits';
const meatsApi = 'http://localhost:4000/market/meats';

function Fruit(props) {
  const { name, addToCart } = props;
  return (
    <div>
      <span>{name}</span>
      <button onClick={evt => addToCart(name)}>Add To Cart</button>
    </div>
  );
}

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

function Market() {
  const [stock, setStock] = useState({
    fruits: ['orange', 'lemon'],
    meats: ['beef', 'chicken'],
  });
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart(cart.concat(item));
  };

  return (
    <div className="App">
      <Fruits fruits={stock.fruits} addToCart={addToCart} />
      <h3>Cart:</h3>
      {
        cart.length
          ? cart.map((item, idx) => <div key={idx}>{item}</div>)
          : <div>Nothing in the cart. Sad!</div>
      }
    </div>
  );
}

export default Market;
