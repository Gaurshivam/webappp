import React from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = ({isLoggedIn,logout}) => {
  return (
        <div className="nav">
        <div className="title">
            <Link to="/"><h1 >Shivam Gaur</h1></Link>
        </div>
        <div className="menu">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/card">Add To Card</Link>
            <Link to="/contact">Contact</Link>
            {isLoggedIn ? (<button onClick={()=>logout()}>Logout</button> ): null}
        </div>
    </div>
  );
}

export default Navbar; 