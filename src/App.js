import React, { useState, useEffect } from 'react';
// step 1: bring axios!
import axios from 'axios';
import Cart from './Cart';
import Fruits from './Fruits';
import './App.css';

const fruitsApi = 'http://localhost:4000/market/fruits';
const meatsApi = 'http://localhost:4000/market/meats';

function Market() {
  const [error, setError] = useState(null);
  // step 2:
  // we will hydrate state with the stuff from the API
  // so let's just start out with empty arrays for fruits and meats
  const [stock, setStock] = useState({
    fruits: [],
    meats: [],
  });
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart(cart.concat(item));
  };

  // by invoking useEffect passing a callback "foo"
  // we are telling the browser:
  // hey, react! Once you are done updating the DOM,
  // go ahead and invoke the callback "foo"
  useEffect(() => {
    // THIS EFFECT RUNS THE FIRST TIME Market renders,
    // and every time Market re-renders
    // (rendering being the WHOLE process)
    console.log('Market first renders, OR re-rendered for whatever reason');
  });

  // useEffect(() => {
  //   // THIS EFFECT RUNS ONLY AFTER THE FIRST RENDER
  //   // step 3: use axios to get some fruits!
  //   // don't forget about passing empty array as second arg to useEffect
  //   // don't forget axios wraps the response -- our stuff is inside response.data
  //   axios.get(fruitsApi)
  //     .then(response => {
  //       // setStock will shove a new stock into Market state
  //       // (which will cause the whole render process to trigger again)
  //       setStock({ fruits: response.data })
  //     })
  //     .catch(error => {
  //       setError(error.message);
  //     });
  // }, []); // empty array makes it so this effect does not happen on re-renders

  useEffect(() => {
    axios.get(fruitsApi)
      .then(fruitsResponse => {
        axios.get(meatsApi)
          .then(meatResponse => {
            setStock({
              meats: meatResponse.data,
              fruits: fruitsResponse.data,
            });
          });
      });
  }, [])

  useEffect(() => {
    // THIS EFFECT AFTER THE FIRST RENDER, OR anything in the array changes
    console.log('Market first renders, OR the fruits changed');
  }, [stock.fruits]);

  return (
    <div className="App">
      {
        error
      }
      <Fruits fruits={stock.fruits} addToCart={addToCart} />
      <Fruits fruits={stock.meats} addToCart={addToCart} />
      <Cart items={cart} />
    </div>
  );
}

export default Market;
