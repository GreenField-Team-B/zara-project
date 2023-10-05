import React,{useEffect} from 'react'
import OneProduct from './OneProduct.jsx'

import {useSelector,useDispatch} from 'react-redux'
import  {fetchProductData}  from '../redux/productSlice.js';

const AllProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state)=>state.products?.data)

// console.log('state',state);  
useEffect(()=>{
    dispatch(fetchProductData())
  },[dispatch])

  return (
    <div>{products.map((product)=>{ return <OneProduct key={product.id} product={product}/>})}</div>
    
  )
}

export default AllProducts