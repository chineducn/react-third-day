import React, { useState, useEffect } from 'react';
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

  // by invoking useEffect passing a callback "foo"
  // we are telling react:
  // hey, react! Once you are done updating the DOM,
  // go ahead and invoke the callback "foo"
  useEffect(() => {
    // THIS EFFECT RUNS THE FIRST TIME Market renders,
    // and every time Market re-renders
    // (rendering being the WHOLE process)
    console.log('Market first renders, OR re-rendered for whatever reason');
  });

  useEffect(() => {
    console.log('Market first rendered. You will not see mee again');
  }, []);

  return (
    <div className="App">
      <Fruits fruits={stock.fruits} addToCart={addToCart} />
      <Cart items={cart} />
    </div>
  );
}

export default Market;
