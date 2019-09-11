import React, { useState } from 'react';
import Cart from './Cart';
import Fruits from './Fruits';
import './App.css';

const fruitsApi = 'http://localhost:4000/market/fruits';
const meatsApi = 'http://localhost:4000/market/meats';

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
      <Cart items={cart} />
    </div>
  );
}

export default Market;
