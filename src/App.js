import React, { useState } from 'react';
import Items from './Items';
import Cart from './Cart';
import './App.css';

const fruitsApi = 'http://localhost:4000/market/fruits';
const meatsApi = 'http://localhost:4000/market/munchies';

function Market() {
  
  const [stockState, setStockState] = useState({
    fruitStock: ['udara', 'ichekwu', 'sour chop', 'mango', 'avocado'],
    munchiesStock: ['date', 'suya', 'puff-puff', 'springroll', 'kilishi']
  })

 
  
  const { fruitStock, munchiesStock } = stockState;
  console.log(fruitStock);
  console.log(munchiesStock)

  
  const [cartState, setCartState] = useState([]);

   

  return (
    <div className="App">
      <h1>Hello</h1>
      {/* <Fruit name={nameApp}/> */}
      <Items itemsArray={fruitStock} cartFunction={setCartState} cartArray={cartState}/>
      <Items itemsArray={munchiesStock} cartFunction={setCartState} cartArray={cartState}/>
      <Cart cartArray={cartState} />
            
      
    </div>
  );
}

export default Market;
