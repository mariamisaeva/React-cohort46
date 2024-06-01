import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/productCard.css';
import FavoriteButton from './FavoriteButton';


function ProductCard({ item }) {
    return (
        <div className="productCard">
            <FavoriteButton productId={item.id} />
            <img src={item.image} alt={item.title} />
            <h3>
                <Link to={`/products/${item.id}`} className="productLink">{item.title}</Link>
            </h3>
            <p>${item.price}</p>
        </div>
    );
}

export default ProductCard;
