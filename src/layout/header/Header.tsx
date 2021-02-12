import React from 'react';

import './Header.scss';
import logo from '../../assets/images/logo.png';

function Header() {
  return (
    <header className='Header text-lg' data-testid='Header'>
      <div className='Header-logo'>
        <span>
          <img
            src={logo}
            className='Header-logo-image'
            data-testid='Logo'
            alt='logo'
          />
        </span>
        <span>Bastila Claim Services</span>
      </div>
      <div className='Header-user'>Hello, User</div>
    </header>
  );
}

export default Header;
