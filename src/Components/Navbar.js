import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../media/planet.png';

const links = [
  {
    id: 1,
    path: '/',
    text: 'Home',
  },
  {
    id: 2,
    path: '/local',
    text: 'LocalAlbums',
  },
  {
    id: 3,
    path: '/qobuz',
    text: 'QobuzAlbums',
  },
];

const Navbar = () => (
  <nav
    className="mx-4 d-flex justify-content-between align-items-center
      py-3 mb-3 border-bottom border-secondary"
  >
    <ul className="d-flex ps-0 mb-0 nav-list">
      {links.map((link) => (
        <li key={link.id} className="text-primary">
          <NavLink to={link.path} activeClassName="displaying" exact>
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
