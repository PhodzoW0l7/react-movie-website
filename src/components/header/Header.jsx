import React, { useRef } from 'react';
import '../header/header.scss';
import { Link, useLocation } from 'react-router-dom';

const headerNav = [
  {
    display: 'Home',
    path: '/',
  },
  {
    display: 'Movies',
    path: '/movie',
  },
  {
    display: 'TV Series',
    path: '/tv',
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const active = headerNav.findIndex((nav) => nav.path === pathname); // Fixed the incomplete line

  return (
    <div>
      Header
    </div>
  );
};

export default Header;
