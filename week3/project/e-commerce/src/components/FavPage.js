import React, { useContext, useState, useEffect } from 'react';
import { FavContext } from '../App';
import { Link } from 'react-router-dom';
//import useMultiFetch from '../hooks/useFetch';
// import filledHeart from '../assets/heart-solid.svg';
import '../styles/favPage.css';
import FavoriteButton from './FavoriteButton';



function FavPage() {

    const { favList } = useContext(FavContext);
    const [favProducts, setFavProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


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

    return (
        <div className="favorites-page">
            <h1>Favorites</h1>
            <div className="favorite-products">
                {favProducts.length === 0 ? <div>No favorites yet</div> : favProducts.map((p) => (<div key={p.id} className='favProduct'>
                    <FavoriteButton productId={p.id} />
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
