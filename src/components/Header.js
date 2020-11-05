import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ active }) => {
  return (
    <nav>
      <ul>
        <li className={active === 'restaurants' ? 'active' : null}>
          <Link to="/">Restaurants</Link>
        </li>
        <li className={active === 'cart' ? 'active' : null}>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
