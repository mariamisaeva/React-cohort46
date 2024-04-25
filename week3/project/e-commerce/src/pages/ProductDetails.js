import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FavContext } from '../App';
import filledHeart from '../assets/heart-solid.svg';
import emptyHeart from '../assets/heart-regular.svg';
import useMultiFetch from '../hooks/useFetch';


function CardDetails() {
    const { id } = useParams();

    const { favList, setFavList } = useContext(FavContext);

    // const [details, setDetails] = useState(null);
    //  const [detailsLoading, setDetailsLoading] = useState(false);
    // const [error, setError] = useState(null);

    const { data: details, loading: detailsLoading, error } = useMultiFetch([`https://fakestoreapi.com/products/${id}`]);

    /*    useEffect(() => {
            const fetchDetails = async () => {
    
                setDetailsLoading(true);
    
                try {
    
                    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    
                    if (!response.ok) {
                        throw new Error(`Error! status: ${response.status}`);
                    }
    
                    const jsonData = await response.json();
                    setDetails(jsonData);
    
                } catch (err) {
                    console.error('Error fetching details:', err);
                    setError(err);
                    setDetailsLoading(false);
                }
                setDetailsLoading(false);
            }
    
            fetchDetails();
    
        }, [id]);
    */

    const toggleFav = () => {
        if (favList.includes(id)) {
            const removeFromList = favList.filter(favItem => favItem !== id);
            setFavList(removeFromList);
        } else {
            setFavList([...favList, id]);
        }
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
            <button id="favButton">
                <img src={favList.includes(id) ? filledHeart : emptyHeart} alt="fav"
                    onClick={toggleFav} />
            </button>
            <h2>{details.title}</h2>
            <img src={details.image} alt={details.title} />
            <p>{details.description}</p>
            <p>${details.price}</p>
        </div>
    );

}

export default CardDetails;
