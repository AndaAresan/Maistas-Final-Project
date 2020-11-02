import React from 'react';
import Card from './Card';

const RestaurantsList = ({ filteredRestaurants }) => {
    return (
        <div>
            {filteredRestaurants.map((restaurant, i) => {
                return <Card key={i} name={restaurant} />;
            })}
        </div>
    );
};

export default RestaurantsList;