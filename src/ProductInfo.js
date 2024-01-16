import React, { useEffect, useState } from 'react'
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios";
import LoadingSpinner from './LoadingSpinner';

function ProductInfo() {
  
    const [product, setProduct] = useState();
    const {userId} = useParams()
    // console.log(userId)
    useEffect(()=>{
      // console.log('useeffect');
      axios.get(`https://fakestoreapi.com/products/${userId}`).then((response) => {
          console.log(response.data);
          setProduct(response.data)

      });
    },[])
    // console.log("y",users.email);
  return (
    <>
   
    {
    product?
  <div className="userinfo">
    <div id=''><h1>Product Info</h1></div>
    <b> <label htmlFor="">Category:&nbsp;</label></b>
    {product ? product.category : ''}
    <br />
    <b><label htmlFor="">Title:&nbsp;</label></b>
    {product ? product.title : ''}
    <br />
   
    <b><label htmlFor="">Price:&nbsp;</label></b>
    {product ? product.price : ''}
    </div>
    : <LoadingSpinner/>
     }
      </>
  )

}

export default ProductInfo