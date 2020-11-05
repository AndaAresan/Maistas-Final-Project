import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SearchBox from '../components/SearchBox';
import Header from '../components/Header';
import Card from '../components/Card';

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchfield, setSearchfield] = useState('');

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  useEffect(() => {
    const getRestaurants = async () => {
      const result = await axios.get(
        'https://my-json-server.typicode.com/Cosmin26/food-db/restaurants'
      );
      setRestaurants(result.data);
    };

    getRestaurants();
  }, []);

  const getFilteredRestaurants = () => {
    let filteredRestaurants = [];
    restaurants.forEach((restaurant) => {
      if (restaurant.name.toLowerCase().includes(searchfield.toLowerCase())) {
        filteredRestaurants.push(restaurant);
      }
    });

    return filteredRestaurants;
  };

  return (
    <div>
      <Header active="restaurants" />
      <div>
        <h1 className="food-app-title">Restaurants</h1>
        <SearchBox searchChange={onSearchChange} />
        <div className="divided-container">
          {getFilteredRestaurants().map((restaurant, i) => {
            return (
              <Card
                key={i}
                title={restaurant.name}
                picture={restaurant.picture}
                description={`${restaurant.openingTime} - ${restaurant.closingTime}`}
              >
                <a
                  className="food-app-action-button"
                  href={`/details?id=${restaurant.id}`}
                >
                  See more
                </a>
                <p>Minimum order: {restaurant.minimumOrder}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
