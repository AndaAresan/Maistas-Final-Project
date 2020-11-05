import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Card from '../components/Card';
import Header from '../components/Header';

const Cart = () => {
  const [dishes, setDishes] = useState([]);
  const [forceRender, setForceRender] = useState(0);

  const removeDish = (id) => {
    let currentCart = JSON.parse(localStorage.getItem('food-cart'));
    currentCart[id] = null;
    localStorage.setItem('food-cart', JSON.stringify(currentCart));
    setForceRender(forceRender + 1);
  };

  useEffect(() => {
    const getDishes = async () => {
      const result = await axios.get(
        'https://my-json-server.typicode.com/Cosmin26/food-db/dishes'
      );
      setDishes(result.data);
    };

    getDishes();
  }, []);

  let currentCart = JSON.parse(localStorage.getItem('food-cart'));
  let showedInCart = [];
  let totalSum = 0;
  dishes.forEach((dish) => {
    if (currentCart[dish.id] === 1) {
      showedInCart.push(dish);
      totalSum += dish.price;
    }
  });

  return (
    <div>
      <Header active="cart" />
      <h1 className="food-app-title">Total: {totalSum}</h1>
      <div>
        {showedInCart.map((dish, i) => {
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
                  onClick={() => {
                    removeDish(dish.id);
                  }}
                >
                  Remove
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

export default Cart;
