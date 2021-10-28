import React from 'react'
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
function Navbar() {
    return (
        <div className={styles.bar}>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/users/details">Users Details</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link> 
        </div>
    )
}

export default Navbar
