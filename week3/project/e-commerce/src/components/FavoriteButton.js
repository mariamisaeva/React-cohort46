import { useContext } from 'react';
import { FavContext } from '../App';
import filledHeart from '../assets/heart-solid.svg';
import emptyHeart from '../assets/heart-regular.svg';

function FavoriteButton({ productId }) {

    const { favList, toggleFav } = useContext(FavContext);

    const handleToggleFav = () => {
        const id = parseInt(productId, 10);
        toggleFav(id);
    };


    return (
        <button id="favButton" onClick={handleToggleFav}>
            <img src={favList.includes(parseInt(productId, 10)) ? filledHeart : emptyHeart}
                alt="fav"
            />
        </button>
    );
}

export default FavoriteButton;