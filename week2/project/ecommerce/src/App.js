import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Categories from './components/Categories';
import Products from './components/Products';
import CardDetails from './components/CardDetails';


function App() {

    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryClick = (category) => {
        setSelectedCategory((currentCategory) => currentCategory === category ? '' : category);
    };

    return (
        <Router>
            <div className="App">
                <h1>Products</h1>


                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Categories
                                    selectedCategory={selectedCategory}
                                    onCategoryClick={handleCategoryClick}
                                />
                                <Products selectedCategory={selectedCategory} />
                            </>
                        }
                    />
                    <Route path="/products/:id" element={<CardDetails />} />
                </Routes>

            </div >
        </Router>
    );
}

export default App;
