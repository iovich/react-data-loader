import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Clock = () => {
  return (
    <div>
      <h2>CLOCK!</h2>
      <div>THIS header of Clock</div>
      <nav>
        <h4>Menu of clock: </h4>
        <ul>
          <li>
            <Link to="/clock/counter">Counter</Link>
          </li>
          <li>
            <Link to="/clock/stopWatch">StopWatch</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <div>Footer of Clock...</div>
    </div>
  );
}

export default Clock;
