import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import {Details} from './Details';
import RestaurantsList from './RestaurantsList';
import SearchBox from "./SearchBox";


const Restaurants = (props) => <h2>Restaurants</h2>;
const Cart = () => <h2>Cart</h2>

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  useEffect(() => {
    fetch("")
    .then((response) => response.json())
    .then((restaurants) => {
      console.log(restaurants.tags)
      setRestaurants(restaurants.messege);
    });
  }, []);

  const filteredRestaurants = Object.keys((restaurants) => {
    return restaurants.toLowerCase().includes(searchfield.toLocateLowerCase());
  });

  return (
    <BrowserRouter>
    <nav>
      <ul>
        <li>
          <Link to="/">Restaurants</Link>
          <div className="app">
          <h1>Restaurants</h1>
          <SearchBox searchChange={onSearchChange} />
          <RestaurantsList filteredRestaurants={filteredRestaurants} />
          </div>
        </li>
        <li>
          <Link to="/details">Details</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route exact={true} path="/" component={Restaurants} />
      <Route path="/cart" component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
