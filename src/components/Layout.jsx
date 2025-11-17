import { Outlet } from 'react-router-dom';
import React from 'react';
import Header from './Header';
import Footer from './Footer';


const MainLayout = () => {

  return <>
    <Header/>
      <main style={{ padding: '1rem' }}>
        <Outlet />
      </main>
      <Footer/>
    </>
  
};

export default MainLayout;