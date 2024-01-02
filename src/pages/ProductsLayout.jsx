import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function ProductsLayout() {
  return (
    <>
    <ul>
        <li><Link to='/products/productOne'>one</Link></li>
        <li><Link to='/products/productTwo'>two</Link></li>
    </ul>
    <Outlet/>
    </>
  )
}

export default ProductsLayout