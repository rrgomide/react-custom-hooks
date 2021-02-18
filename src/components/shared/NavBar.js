import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="black darken-4">
      <ul>
        <li>
          <NavLink
            to="/"
            exact={true}
            className="material-icons"
            style={{
              verticalAlign: 'middle',
            }}
          >
            home
          </NavLink>
        </li>

        <li key="home" style={{ fontSize: '0.8rem' }}>
          Hooks customizados | Raphael Gomide
        </li>
      </ul>
    </nav>
  );
}
