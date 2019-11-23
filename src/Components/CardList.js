import React from 'react';
import Card from './card.js';

const CardList = ({robots}) => {
 
    const Asu = robots.map((data) =>{
        return <Card name={data.name} email= {data.email} />;
    })
    return <div>{Asu}</div>;
}
export default CardList;