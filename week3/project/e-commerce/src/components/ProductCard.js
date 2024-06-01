import React from 'react'; //import useContext
// import { FavContext } from '../App'; //import context
import { Link } from 'react-router-dom';
import '../styles/productCard.css';
// import filledHeart from '../assets/heart-solid.svg'; //pics
// import emptyHeart from '../assets/heart-regular.svg';
import FavoriteButton from './FavoriteButton'; //import FavoriteButton


function ProductCard({ item }) {

    // const { favList, setFavList } = useContext(FavContext);  //extract and access context
    // const toggleFav = () => {
    //     setFavList(prevFavList => {
    //         if (prevFavList.includes(item.id)) {
    //             return prevFavList.filter(favItem => favItem !== item.id); // remove item if already in favList
    //         } else {
    //             return [...prevFavList, item.id]; // add item to favList
    //         }
    //     });
    // };
    // const toggleFav = () => {

    //     if (favList.includes(item.id)) { //if the list has the item
    //         const removeFromList = favList.filter(favItem => favItem !== item.id); //remove it (exclude it)
    //         setFavList(removeFromList); //update the list
    //     } else {
    //         setFavList([...favList, item.id]); //add it
    //     }
    // };

    return (
        <div className="productCard">
            <FavoriteButton productId={item.id} />
            <img src={item.image} alt={item.title} />
            <h3>
                <Link to={`/products/${item.id}`} className="productLink">{item.title}</Link>
            </h3>
            <p>${item.price}</p>
        </div>
    );
}

export default ProductCard;
