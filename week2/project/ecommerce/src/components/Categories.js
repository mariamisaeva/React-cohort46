import React, { useState, useEffect } from 'react';
//import categoriesArr from '../fake-data/all-categories.js';
import '../styles/categories.css';

function Categories({ selectedCategory, onCategoryClick }) {

    const [categories, setCategories] = useState([]); //to fetch categories
    const [loadingCategories, setLoadingCategories] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchData = async () => {

            try {

                const response = await fetch('https://fakestoreapi.com/products/categories');

                if (!response.ok) {
                    throw new Error(`Error! status: ${response.status}`);
                }

                const jsonData = await response.json();

                setCategories(jsonData);


            } catch (err) {

                console.error('Error fetching categories:', err);
                setError(err);
            }
            finally {
                setLoadingCategories(false); //stop loading after fetching data
            }

        }

        fetchData();

    }, []);



    return (
        <div className='catContainer' >

            {
                error ? <div>Error: {error.message}</div> : loadingCategories ? <div className="loadingCategories">Loading Categories ...</div> :
                    (
                        categories.map(
                            (category, index) => //onclick, selectedCategory
                                <div key={index} className={`category ${selectedCategory === category ? 'active' : ''}`}
                                    onClick={() => onCategoryClick(category)} >
                                    {category}</div>)
                    )
            }
        </div >
    );
}

export default Categories;
