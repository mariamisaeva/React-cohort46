import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard.js';
//import productsData from '../fake-data/all-products.js';
import '../styles/products.css'


function Products({ selectedCategory }) {
    const [products, setProducts] = useState([]);
    const [loadingProducts, setLoadingProducts] = useState(false);
    const [error, setError] = useState(null);
    /**
     * https://fakestoreapi.com/products or 
     * https://fakestoreapi.com/products/category/:selectedCategory 
     */
    useEffect(() => {
        const fetchData = async () => {

            setLoadingProducts(true);

            try {
                const URL_2 = selectedCategory ? `https://fakestoreapi.com/products/category/${selectedCategory}` : `https://fakestoreapi.com/products`;

                const response = await fetch(URL_2);

                if (!response.ok) {
                    throw new Error(`Error! status: ${response.status}`);
                }

                const jsonData = await response.json();

                setProducts(jsonData);

            } catch (err) {
                console.error('Error fetching products:', err);
                setLoadingProducts(false);
                setError(err);
            }

            setLoadingProducts(false);

        }

        fetchData();

    }, [selectedCategory]);


    return (
        <div className="products-container">

            {loadingProducts ? <div className="loadingProducts">Loading Products ...</div> : error ? <div>Error: {error.message}</div> :
                (
                    products.map((item) => (
                        <ProductCard key={item.id} item={item} />
                    ))
                )
            }

        </div >
    );
}

export default Products;
