import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Card from '../components/Card';
import Header from '../components/Header';

const Details = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [dishes, setDishes] = useState([]);
  const [forceRender, setForceRender] = useState(0);

  const addToCart = (id) => {
    let currentCart = JSON.parse(localStorage.getItem('food-cart'));
    if (!currentCart) {
      currentCart = [];
    }
    if (!currentCart[id]) {
      currentCart[id] = 1;
    }
    localStorage.setItem('food-cart', JSON.stringify(currentCart));
    setForceRender(forceRender + 1);
  };

  const itemIsAlreadyAdded = (id) => {
    let currentCart = JSON.parse(localStorage.getItem('food-cart'));
    if (!currentCart) {
      return false;
    }
    if (currentCart[id] === 1) {
      return true;
    }

    return false;
  };

  const urlParams = new URLSearchParams(window.location.search);
  const idParam = parseInt(urlParams.get('id'));

  useEffect(() => {
    const getRestaurants = async () => {
      const result = await axios.get(
        'https://my-json-server.typicode.com/Cosmin26/food-db/restaurants'
      );
      setRestaurants(result.data);
    };
    const getDishes = async () => {
      const result = await axios.get(
        'https://my-json-server.typicode.com/Cosmin26/food-db/dishes'
      );
      setDishes(result.data);
    };

    getRestaurants();
    getDishes();
  }, []);

  const selectedRestaurants = restaurants.filter(
    (restaurant) => restaurant.id === idParam
  );
  const selectedDishes = dishes.filter((dish) => dish.restaurantId === idParam);

  if (selectedRestaurants.length === 0) {
    return null;
  }

  return (
    <div>
      <Header />
      <h1 className="food-app-title">Details</h1>
      <div className="divided-container">
        {selectedDishes.map((dish, i) => {
          return (
            <Card
              key={i}
              title={dish.name}
              picture={dish.picture}
              description={dish.description}
            >
              <div className="card-dish-right">
                <button
                  className="food-app-action-button"
                  disabled={itemIsAlreadyAdded(dish.id)}
                  onClick={() => {
                    addToCart(dish.id);
                  }}
                >
                  {itemIsAlreadyAdded(dish.id) ? 'Added' : 'Add to cart'}
                </button>
                <p>{dish.price} RON</p>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Details;
