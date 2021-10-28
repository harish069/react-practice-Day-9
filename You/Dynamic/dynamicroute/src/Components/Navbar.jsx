import React from 'react'
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
    return (
        <div className={styles.bar}>
            <Link to="/">Home</Link>
            <Link to="/allproducts">All Products</Link>
            <Link to="/allproducts/productdetails">Product Details</Link>
        </div>
    ) 
}

export default Navbar
