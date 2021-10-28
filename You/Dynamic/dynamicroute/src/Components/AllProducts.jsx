import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllProducts() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/Products").then((res) => {
           // console.log(data);
            setProducts(res.data);
            // return data;
        }, [])
    })
    return (
        <div>
            {products.map((e) => {
                return <>
                    <div>
                        <div>{e.name}</div>
                        <div> {e.price}</div>
                        
                        <div><Link to={`/allproducts/${e.id}`} >more details</Link></div>
                    </div>
                </>
            })}
        </div>
    )
}

export default AllProducts
