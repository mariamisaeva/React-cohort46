import React, { useState, createContext } from 'react'; //import createContext
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home';
import CardDetails from './pages/ProductDetails';
import FavPage from './components/FavPage';
import { Link } from "react-router-dom";


const FavContext = createContext({
    favList: [],
    toggleFav: () => { }
}); //create a context


function App() {

    const [favList, setFavList] = useState(() => {
        return Array.from(new Set([]));
    });  //state to keep track of fav array

    const toggleFav = (productId) => {
        setFavList(prevFavList => {
            let newList;
            const id = parseInt(productId, 10); //pars id to number (duplication includes string)
            if (prevFavList.includes(productId)) {
                newList = prevFavList.filter(favItem => favItem !== productId);
            } else {
                newList = [...prevFavList, id];
            }
            // console.log('Updated favList:', newList);
            return newList;
        });
    };

    return (
        <Router>
            <FavContext.Provider value={{ favList, toggleFav }}>
                <div className="App">

                    <nav className='nav'>
                        <Link to="/" className='navLink'>Home</Link>
                        <Link to="/favourites" className='navLink'>Favourites</Link>
                    </nav>

                    <h1>Products</h1>

                    <Routes>
                        <Route
                            path="/"
                            element={<Home />}
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
