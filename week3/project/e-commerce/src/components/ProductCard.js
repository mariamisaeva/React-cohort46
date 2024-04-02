import React, { useContext } from 'react'; //import useContext
import { FavContext } from '../App'; //import context
import { Link } from 'react-router-dom';
import '../styles/productCard.css';
import filledHeart from '../assets/heart-solid.svg'; //pics
import emptyHeart from '../assets/heart-regular.svg';


function ProductCard({ item }) {

    const { favList, setFavList } = useContext(FavContext);  //extract and access context

    const toggleFav = () => {

        if (favList.includes(item.id)) { //if the list has the item
            const removeFromList = favList.filter(favItem => favItem !== item.id); //remove it (exclude it)
            setFavList(removeFromList); //update the list
        } else {
            setFavList([...favList, item.id]); //add it
        }
    };

    return (
        <div className="productCard">
            <button id="favButton">
                <img src={favList.includes(item.id) ? filledHeart : emptyHeart}
                    alt="fav"
                    onClick={toggleFav} />
            </button>
            <img src={item.image} alt={item.title} />
            <h3>
                <Link to={`/products/${item.id}`} className="productLink">{item.title}</Link>
            </h3>
            <p>${item.price}</p>
        </div>
    );
}

export default ProductCard;
