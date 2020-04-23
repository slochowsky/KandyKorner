import React, { useContext } from "react"
import { ProductContext } from "./ProductProvider"
import Product from "./Product"
import "./Product.css"

export default () => {
    const { products } = useContext(ProductContext)

    return (
        <div className="products">
            
        {
            products.map(prod => <Product key={prod.id} product={prod} />)
        }
        </div>
    )
}