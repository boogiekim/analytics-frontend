import React from 'react';
import bannerImage from '../../assets/images/data-banner.webp'; // Adjust the path as needed
import Navigation from './Navigation';
import Nav from './Nav';

const Header = () => {
  return (
    <header className="App-header">
      {/* <Navigation /> */}
      <Nav/>
    </header>
  );
};

export default Header;
