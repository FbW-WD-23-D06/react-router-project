import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {
  return (
    <>
    <h4>Products</h4>
    
    <ul>
    <li><Link to='/products/productOne'>one</Link></li>
    <li><Link to='/products/productTwo'>two</Link></li>
</ul>
<Outlet />
    </>
  )
}

export default Products