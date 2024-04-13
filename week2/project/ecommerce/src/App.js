import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';


function App() {

    return (
        <Router>
            <div className="App">
                <h1>Products</h1>


                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route path="/products/:id" element={<ProductDetails />} />
                </Routes>

            </div >
        </Router>
    );
}

export default App;
