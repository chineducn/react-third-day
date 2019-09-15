import React from 'react';



const Cart = ({ cartArray }) => {
    if (cartArray.length) {
        return <>{cartArray.map((cartItem, idx) => <h4 key={idx}>{cartItem}</h4>)}</>
    }
    return <h2>Empty Cart</h2>
}

 
    
export default Cart;