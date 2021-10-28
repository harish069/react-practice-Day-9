import React from 'react'
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
    return (
        <div className={styles.bar}>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/login">Login</Link>
        </div>
    )
}

export default Navbar
