import React from "react"
import "./Product.css"

export default ({ product }) => (
    <section className="product">
        <h3 className="product__name">Name: {product.name}</h3>
        <div className="product__price">Price: {product.price}</div>
        <div className="product__type">Type Of Kandy: {product.productTypeId}</div>
    </section>
)