import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import { FavContext } from '../App';
// import filledHeart from '../assets/heart-solid.svg';
// import emptyHeart from '../assets/heart-regular.svg';
import useMultiFetch from '../hooks/useFetch';
import FavoriteButton from '../components/FavoriteButton';



function CardDetails() {
    const { id } = useParams();
    const Navigate = useNavigate();
    // const { favList, setFavList } = useContext(FavContext);

    const { data: details, loading: detailsLoading, error } = useMultiFetch([`https://fakestoreapi.com/products/${id}`]);


    const handleGoBack = () => {
        Navigate(-1);
    };

    if (detailsLoading) {
        return <div>Loading ...</div>;
    }

    if (error) {
        return <div>Error: {error.message} found</div>;
    }

    if (!details) {
        return <div>No details found</div>;
    }


    return (
        <div className="details-container">
            <FavoriteButton productId={id} />
            <h2>{details.title}</h2>
            <img src={details.image} alt={details.title} />
            <p>{details.description}</p>
            <p>${details.price}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>

    );

}

export default CardDetails;
