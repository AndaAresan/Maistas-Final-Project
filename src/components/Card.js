import React from 'react';

const Card = (props) => {
  return (
    <div className="card-container">
      <img src={props.picture} alt="Restaurant" />
      <h1>{props.id}</h1>
      <div className="card-details">
        <div>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
        <div className="card-more">{props.children}</div>
      </div>
    </div>
  );
};

export default Card;
