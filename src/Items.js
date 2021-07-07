import React from 'react';
import Item from './Item'

const Items = ({ itemsArray, cartFunction, cartArray }) => {
    
    return (
        itemsArray.map(myItem => 
            <Item key={myItem} name={myItem} alterCart={cartFunction} alteredCart={cartArray}/>)
    )
    
}

export default Items;