import React from 'react';

const Card = (props) => {
    return (
        <div className="first">
            <h1>{props.id}</h1>
            <div>
                <h2>{props.name}</h2>
            </div>
        </div>
    );
};

export default Card;