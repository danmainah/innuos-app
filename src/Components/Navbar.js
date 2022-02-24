import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  {
    id: 1,
    path: '/',
    text: 'ALL-ALBUMS',
  },
  {
    id: 2,
    path: '/local',
    text: 'LOCAL-ALBUMS',
  },
  {
    id: 3,
    path: '/qobuz',
    text: 'QOBUZ-ALBUMS',
  },
];

const Navigation = () => (
  <nav bg="dark" variant="dark"
    className=" d-flex justify-content-center align-items-center
    py-3 mb-3 border-bottom border-secondary"
  >
    <ul className="d-flex ps-0 mb-0 nav justify-content-center">
    {links.map((link) => (
        <li key={link.id} className="mx-2 nav-item bg-dark">
          <NavLink to={link.path} activeClassName="displaying" className="text-white text-decoration-none border-warning">
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;
