import React from 'react';

function Cart(props) {
  const { items } = props;
  return (
    <>
      <h3>Cart:</h3>
      {
        items.length
          ? items.map((item, idx) => <div key={idx}>{item}</div>)
          : <div>Nothing in the cart. Sad!</div>
      }
    </>
  )
}

export default Cart;
