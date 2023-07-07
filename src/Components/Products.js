import React from "react";
import './Products.css'
import {Link,Outlet} from 'react-router-dom'

const Products = () => {
  return (
    <div className="product">
    <div className="ProductContent">
       <Link to='electronic'>Electronic</Link>
       <Link to='jewelery'>Jewelery</Link>
       <Link to='men'>Mens Clothing</Link>
       <Link to='all'>All Products</Link>
    </div>
    <div className="ProductData">
    <Outlet />
    </div>
    </div>
  );
};

export default Products;
