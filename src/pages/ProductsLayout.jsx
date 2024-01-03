import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function ProductsLayout() {
  return (
    <>
    {/* State in Link wird an ProductOne component geschickt und dort mit useLocation kann man es verwenden */}
    <ul>
        <li><Link to='/products/productOne' state="Hi">one</Link></li>
        <li><Link to='/products/productTwo'>two</Link></li>
    </ul>
    <Outlet context={{Hi : "for sale"}}/> 
    </>
  )
}

export default ProductsLayout