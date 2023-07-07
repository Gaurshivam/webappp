import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

const MensClothing = () => {
    const [first, setfirst] = useState([])

  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products?limit=4")
    .then((res)=>{
        setfirst(res.data)
    })
  },[])
  return (
    <div>
      <h2 style={{textAlign:"center"}}>Men's Product</h2>
      <ul>
        {
          first.map((item)=>{
            return(
              <Link style={{color:"green"}} to={`/productsdetails/${item.id}`}><li>{item.title}</li></Link>
            )
          })
        }
      </ul>
    </div>
  );
}

export default MensClothing;