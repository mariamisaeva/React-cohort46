import React, { useContext, useState, useEffect } from 'react';
import { FavContext } from '../App';
import { Link } from 'react-router-dom';
//import useMultiFetch from '../hooks/useFetch';
import filledHeart from '../assets/heart-solid.svg';
import '../styles/favPage.css';



function FavPage() {

    const { favList, setFavList } = useContext(FavContext);
    const [favProducts, setFavProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    /* 
    Problem 1: when I useMultiFetch() I get an error id is not defined and when I write the following piece of code I get an error in the favorites section : Error: Error!, status: undefined.

        const urls = favList.map(id => `https://fakestoreapi.com/products/${id}`);
        const { data: favProducts, loading, error } = useMultiFetch(urls);
        
    Problem 2: I wanted to open product details (CardDetails.js) once I press the title as it is in the Products section. I couldn't do it!!.
    */


    useEffect(() => {
        const fetchFavProducts = async () => {

            setLoading(true);

            try {

                const fetchFav = favList.map(async (id) => {
                    const response = await fetch(`https://fakestoreapi.com/products/${id}`);

                    if (!response.ok) console.error(`Error! status: ${response.status}`);

                    return response.json();
                });

                const jsonData = await Promise.all(fetchFav); //arr
                setFavProducts(jsonData);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);

            }
        };


        fetchFavProducts();
    }, [favList]);

    if (loading) {
        return <div>Loading ...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const removeFromFavList = (productId) => {
        if (favList.includes(productId)) {
            const remove = favList.filter(favItem => favItem !== productId);
            setFavList(remove);
        }

    };

    return (
        <div className="favorites-page">
            <h1>Favorites</h1>
            <div className="favorite-products">
                {favProducts.length === 0 ? <div>No favorites yet</div> : favProducts.map((p) => (<div key={p.id} className='favProduct'>
                    <button id="favButton">
                        <img src={filledHeart} alt="fav"
                            onClick={() => { removeFromFavList(p.id) }} />
                    </button>
                    <img src={p.image} alt={p.title} />
                    <Link to={`/products/${p.id}`}>
                        < h3 > {p.title}</h3>
                    </Link>
                    <p>{p.price}</p>

                </div>))
                }
            </div >
        </div >
    );
}

export default FavPage;
