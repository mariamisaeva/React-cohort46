import React from 'react';
import '../styles/productCard.css';


function ProductCard({ item }) {

    return (
        <div className="productCard">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>${item.price}</p>
        </div>
    );
}

export default ProductCard;
