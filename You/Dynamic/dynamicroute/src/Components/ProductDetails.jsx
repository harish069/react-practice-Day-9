import React from 'react'
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./ProductDetails.module.css";

function ProductDetails() {
    const { id } = useParams();
    console.log(id,"id");
    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/Products/${id}`).then(data =>
            setProduct(data.data)
        )
    }, [])
    console.log(product);

    return (
        <div>
            {console.log(product, "product")}
            <div>Name:- {product.name}
                <br />
                Price:- {product.price}
                <br />
                <img className={styles.image}src={`${product.image}`} alt="" />
            </div>
        </div>
    )
}

export default ProductDetails
