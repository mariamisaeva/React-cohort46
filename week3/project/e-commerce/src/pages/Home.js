import React, { useState } from 'react';
import Categories from '../components/Categories';
import Products from '../components/Products';


function Home() {

    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryClick = (category) => {
        setSelectedCategory((currentCategory) => currentCategory === category ? '' : category);
    };

    return (
        <div className="home">
            <Categories
                selectedCategory={selectedCategory}
                onCategoryClick={handleCategoryClick}
            />
            <Products selectedCategory={selectedCategory} />
        </div>
    );
}

export default Home;
