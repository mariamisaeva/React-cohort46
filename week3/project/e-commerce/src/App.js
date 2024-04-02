import React, { useState, createContext } from 'react'; //import createContext
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Categories from './components/Categories';
import Products from './components/Products';
import CardDetails from './components/CardDetails';
import FavPage from './components/FavPage';
import { Link } from "react-router-dom";


const FavContext = createContext(); //create a context


function App() {

    const [favList, setFavList] = useState([]);  //state to keep track of fav array

    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryClick = (category) => {
        setSelectedCategory((currentCategory) => currentCategory === category ? '' : category);
    };

    return (
        <Router>
            <FavContext.Provider value={{ favList, setFavList }}>
                <div className="App">

                    <nav className='nav'>
                        <Link to="/" className='navLink'>Home</Link>
                        <Link to="/favourites" className='navLink'>Favourites</Link>
                    </nav>

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
                        <Route path="/favourites" element={<FavPage />} />
                    </Routes>

                </div >
            </FavContext.Provider>
        </Router>
    );
}

export default App;
export { FavContext }; //export the context
