import React, { useContext } from 'react';
import { AppContext } from '../Context/context';

const Login = () => {

  const { setUser } = useContext(AppContext);

  function login(){
    localStorage.setItem('taskolluser', true);
    setUser(true);
  }

  return (
    <div style={{textAlign:"center", margin:"10rem"}}>
      <h1>Burada Login komponenti yerləşəcək </h1>
      <button style={{fontSize:"24px",margin:"1rem 0"}} onClick={login}>Test istifadəçi olaraq giriş et</button>
    </div>
  )
};

export default Login;
