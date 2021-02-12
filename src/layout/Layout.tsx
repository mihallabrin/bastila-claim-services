import React from 'react';

import './Layout.scss';
import Header from './header/Header';
import Content from './content/Content';
import Footer from './footer/Footer';

function Layout() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default Layout;
