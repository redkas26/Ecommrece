import React from "react"
import {useParams} from "react-router-dom"
// import productsData from "./productsData"
import Products from "./Products"

function ProductDetail() {
    const {id} = useParams()
    const thisProduct = Products.find(prod => prod.id === id)
    
    return (
        <div>
            <h1>{thisProduct.name}</h1>
            <p>Price: ${thisProduct.price}</p>
            <p>{thisProduct.description}</p>
        </div>
    )
}

export default ProductDetail