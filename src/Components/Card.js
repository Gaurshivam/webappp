import React, { useEffect, useState } from "react";

const Card = () => {
  const [user, setUser] = useState([])

  const AddaData = () =>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>{
              console.log(data)
              setUser(data)
            })
            
  }

  useEffect(()=>{
     AddaData();
  },[])
  return (
    <div style={{padding:"10px"}}>
      <h2>Card Components</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
        explicabo repellendus incidunt facilis, aliquid voluptatum autem
        voluptas nesciunt nemo deleniti illum numquam placeat eligendi
        praesentium dolor voluptate minima iusto non dolorum culpa dignissimos
        laborum quibusdam iste? Numquam veniam quisquam a minima quo voluptas
        nam maiores, quibusdam eligendi quod non consequuntur dicta tenetur
        facere voluptate doloremque? Fugit rerum iusto aliquid sit sequi, quos
        suscipit quae vero labore incidunt cupiditate excepturi recusandae, quod
        consequuntur voluptate illo at quis impedit tempora modi. Assumenda
        quae, consequatur iusto eos error repellendus officiis necessitatibus
        qui optio rerum. Dolorem, ipsa eos iusto optio porro quam aliquid sint
        voluptatum impedit! 
      </p>
     
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}>
    {
      user.map((item,i)=>{
        return(
          <div key={i} style={{width:"300px",height:"350px",boxShadow:"0px 0px 10px black",margin:"20px"}}>
            <img src={item.image} alt="Products" width={300} height={200}  />
            <h2>{item.category}</h2>
            <p>Price : {item.price}</p>
            <button>Add to Card</button>
          </div>
        )
      })
    }
    </div>
    </div>
  );
};

export default Card;
