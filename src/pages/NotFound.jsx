import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';


function NotFound() {
const navigate = useNavigate();
useEffect(()=>{
  setTimeout(() => {
    navigate('/', {state : "Error"});
    // navigate(-3);
  }, 3000);
}, [])
  
  return (
    <div>NotFound</div>
    // Navigate component
    // <Navigate to='/'/>
  )
}

export default NotFound