import React, { useState, useEffect } from 'react';
import Items from './Items';
import Cart from './Cart';
import './App.css';
import axios from 'axios';

const fruitsApi = 'http://localhost:4000/market/fruits';
const munchiesApi = 'http://localhost:4000/market/munchies';

function Market() {
  
  const [stockState, setStockState] = useState({
    fruitStock: [],
    munchiesStock: []
  })
  
  const { fruitStock, munchiesStock } = stockState;
  // console.log(fruitStock)
  
  const [cartState, setCartState] = useState([]);

  const [errorState, setErrorState] = useState(null);

  // useEffect(() => {
  //   axios.get(fruitsApi)
  //     .then(fruitImport => {
        
  //       const { data } = fruitImport;
  //       // debugger
  //       setStockState({ fruitStock: data, munchiesStock:[]});
  //     })
  //     .catch(errorItem => {
  //       setErrorState(errorItem.message);
  //     }
  //   )
  // }, []);
  
  useEffect(() => {
    axios.get(fruitsApi)
      .then(fruitsImport => {
        axios.get(munchiesApi)
          .then(munchiesImport => {
            setStockState({
              fruitStock: fruitsImport.data,
              munchiesStock: munchiesImport.data
            })
        })
    })
   }, [])

  return (
    <div className="App">
      <h1>{errorState}</h1>
      {/* <Fruit name={nameApp}/> */}
      <Items itemsArray={fruitStock} cartFunction={setCartState} cartArray={cartState}/>
      <Items itemsArray={munchiesStock} cartFunction={setCartState} cartArray={cartState}/>
      <Cart cartArray={cartState} />
            
      
    </div>
  );
}

export default Market;
