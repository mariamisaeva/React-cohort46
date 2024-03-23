import React from 'react';
import ProductCard from './ProductCard.js';
import productsData from '../fake-data/all-products.js';
import '../styles/products.css'


function Products({ selectedCategory }) {

    const cleanSelectedCategory = selectedCategory.replace('FAKE: ', '');

    //filter products according to selected category (if) // filteredProductsData <=> productsData
    const filteredProductsData =
        selectedCategory ?
            productsData.filter(item => {

                return item.category === cleanSelectedCategory
            }) : productsData;


    return (
        <div className="products-container">

            {filteredProductsData.map((item) => (
                <ProductCard key={item.id} item={item} />
            )
            )}

        </div >
    );
}

export default Products;
