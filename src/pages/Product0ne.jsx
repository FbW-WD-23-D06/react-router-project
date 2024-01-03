import React from 'react'
import { Link, useLocation, useOutletContext } from 'react-router-dom'

function Product0ne() {
  const {Hi} = useOutletContext();
  console.log(Hi);
  const location = useLocation();
  console.log(location);
  return (
    <>
    <div>Product0ne</div>
    <div>{Hi}</div>
    <div>{location.state}</div>
    </>
  )
}

export default Product0ne