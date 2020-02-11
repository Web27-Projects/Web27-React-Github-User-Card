import React from 'react';
import './App.css'

const Cards = props => {
console.log(props.user)
    return(
        <div className= 'userContainer'>
        <h2> {props.user.name}</h2>
        <img width='200' src={props.user.avatar_url} alt={props.user.name} />
        </div>
    )
}

export default Cards;