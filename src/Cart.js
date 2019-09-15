import React from 'react';



const Cart = ({ cartArray }) => {
    if (cartArray.length) {
        return <>{cartArray.map((cartItem, idx) => <h4 key={idx}>{cartItem}</h4>)}</>
    }
    return <h2>Empty Cart</h2>

    // return (
    //     <>
    //         {
    //             cartArray.length
    //                 ? cartArray.map((cartItem, index) => <h5 key={index}>{cartItem}</h5>)
    //                 : <h5>Empty Cart</h5>
    //         }
    //     </>
    // )
}

 
    
export default Cart;