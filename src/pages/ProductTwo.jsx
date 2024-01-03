import React from 'react'
import { useOutletContext } from 'react-router-dom';

function ProductTwo() {
  const {Hi} = useOutletContext();

  return (
    <>
    <div>ProductTwo</div>
    <div>{Hi}</div>
    </>
  )
}

export default ProductTwo