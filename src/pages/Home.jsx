import React from 'react'
import { useLocation } from 'react-router-dom'

function Home() {
  const location = useLocation();
  console.log(location);
  return (
    <>
    <div>Home</div>
    <div>{location.state}</div>
    </>
  )
}

export default Home