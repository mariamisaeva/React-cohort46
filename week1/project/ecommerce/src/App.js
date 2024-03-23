import React, { useState } from 'react';
//import './App.css';
import Categories from './components/Categories';
import Products from './components/Products';


function App() {

    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryClick = (category) => {

        setSelectedCategory((currentCategory) => currentCategory === category ? '' : category);
    };

    return (
        <div className="App">
            <h1>Products</h1>
            <Categories
                selectedCategory={selectedCategory}
                onCategoryClick={handleCategoryClick} />

            <Products selectedCategory={selectedCategory} />

        </div>
    );
}

export default App;
