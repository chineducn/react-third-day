import React, { useState, useEffect } from 'react';
import Items from './Items';
import Cart from './Cart';
import './App.css';
import axios from 'axios';

const fruitsApi = 'http://localhost:4000/market/fruits';
const meatsApi = 'http://localhost:4000/market/munchies';

function Market() {
  
  // const [stockState, setStockState] = useState({
  //   fruitStock: ['udara', 'ichekwu', 'sour chop', 'mango', 'avocado'],
  //   munchiesStock: ['date', 'suya', 'puff-puff', 'springroll', 'kilishi']
  // })
  const [stockState, setStockState] = useState({
    fruitStock: [],
    munchiesStock: []
  })
  
  const { fruitStock, munchiesStock } = stockState;
  
  const [cartState, setCartState] = useState([]);

  useEffect(() => {
    axios.get(fruitsApi)
      .then(fruitImport => {
        // debugger
        const { data } = fruitImport;
        console.log(data);
    })
  });
   

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
