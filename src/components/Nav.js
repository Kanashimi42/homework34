import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

export const Nav = () => {
    const location = useLocation();
    const navigate = useNavigate();
  
    useEffect(() => {
      console.log('Current location is ', location);
    }, [location]);

    return (
      <>
        <nav className='nav'>
          <ul className='menu'>
            <li className='menu__item'><button onClick={() => navigate('newProducts', { replace: false })}>newProducts</button></li>
            <li className='menu__item'><button onClick={() => navigate('ProductInStock', { replace: false })}>ProductInStock</button></li>
            <li className='menu__item'><button onClick={() => navigate('deliveryAndPayment', { replace: false })}>deliveryAndPayment</button></li>
            <li className='menu__item'><button onClick={() => navigate('forums', { replace: false })}>forums</button></li>
            <li className='menu__item'><button onClick={() => navigate('aboutUs', { replace: false })}>aboutUs</button></li>
          </ul>
        </nav>
        <hr />
        <Outlet />
      </>
    )
  };