import React from 'react';

const Item = ({ name, alterCart, alteredCart }) => {
    
    
    
    const addItem = (pick) => {
        alterCart(alteredCart.concat(pick))
        
        };
    return (
        <div>
            <span>{name}</span>
            <button onClick={event => addItem(name)}>Add Item</button>
            
        </div>
        
    )
};

export default Item;