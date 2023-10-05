import React from 'react'

const OneProduct = ({product}) => {
  return (
    <div>
      <h4>{product.stock}</h4>
    <h2>{product.name}</h2>
    <p>{product.price}</p>
    <p>{product.description}</p>
    <h2>{product.color}</h2>
    <h3>{product.size}</h3>
    <h2>{product.quantity}</h2>
    </div>
  )
}

export default OneProduct