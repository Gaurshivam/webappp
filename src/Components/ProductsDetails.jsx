import React, { useEffect, useState } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';

const ProductsDetails = () => {
    const [Product, setProduct] = useState({
        title:"",
        id:"",
        image:"",
        price:"",
        category:"",
        rate:"",
        rating:""
    })
     const navigate = useNavigate()
     const {id} = useParams();//params = {id:9, price:559}

     useEffect(()=>{
         axios.get(`https://fakestoreapi.com/products/${id}`)
         .then((res)=>{
           console.log(res)
           setProduct(res.data)
         })
     },[id])
    
  return (
   <>
     <div style={{boxShadow:"0px 0px 10px black",width:"1200px",margin:"50px auto"}}>
      <div style={{height:"60px",backgroundColor:"lightgreen",paddingTop:"5px"}}><h2>{Product &&  Product.category.toUpperCase()}</h2></div>
      <div style={{display:"flex",height:"450px"}}>
      <div style={{width:"35%",display:"flex",alignItems:"center",justifyContent:"center"}}><img src={Product && Product.image} alt='ProductsImage' width={300} height={300} /></div>
      <div style={{padding:"5px",width:"65%",textAlign:"start"}}>
        <h4>Product Name</h4>
        <p>{Product.title}</p>
        <h4>Product Price</h4>
        <p>$ {Product.price}</p>
        <h4>Product Description</h4>
        <p>{Product.description}</p>  
        <h4>Product Rating</h4>
        <p>{Product.rating.rate}</p>      
      </div>
      </div>
      {/* <Link to="/products"><button>Go back to Product Components</button></Link> */}
    </div>
    <button style={{marginTop:"0px"}} onClick={()=>{navigate("/products")}}>Go back to Product Components</button>
   </>
  );
}

export default ProductsDetails;
