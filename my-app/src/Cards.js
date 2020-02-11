import React from 'react';

const Cards = props => {
console.log(props.user)
    return(
        <>
        <h2> {props.user.name}</h2>
        </>
    )
}

export default Cards;