import React from 'react';
import "./Card.css";

const Card = props => (
	<div 
		className="card"
		onClick={() => props.setClicked(props.id)}>
	    <div className="imgContainer">
	      <img
	      	className="img"
	        alt={props.name}
	        src={props.image}
	      />
	    </div>
	    
  </div>
);

export default Card;