import React from 'react'
import { Outlet } from 'react-router-dom';
import LoginForm from '../../pages/LoginPage/LoginPage';

const ProtectRoutes = (props) => {
  const { isLoggedIn, setIsLoggedIn } = props;
  return isLoggedIn === 'true' ? (
    <Outlet/>
  ) : (
    <LoginForm setIsLoggedIn={setIsLoggedIn}/>
  )
  
}

export default ProtectRoutes;