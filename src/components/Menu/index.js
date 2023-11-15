import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <h2>MENU:</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signIn">SignInForm</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/clock/">Clock</Link>
        </li>
        <li>
          <Link to="/windowSize/">WindowSize</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
