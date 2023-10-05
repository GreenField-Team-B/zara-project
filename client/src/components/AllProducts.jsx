import React from 'react'
import OneProduct from './OneProduct.jsx'
const AllProducts = ({state}) => {
  return (
    <div>{state.data.map((product)=>{ return <OneProduct key={product.id} product={product}/>})}</div>
  )
}

export default AllProducts