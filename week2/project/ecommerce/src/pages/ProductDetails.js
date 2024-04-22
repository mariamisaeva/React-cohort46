import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


function CardDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [details, setDetails] = useState(null);
    const [detailsLoading, setDetailsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
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

    if (detailsLoading) {
        return <div>Loading ...</div>;
    }

    if (error) {
        return <div>Error: {error.message} Found</div>;
    }

    if (!details) {
        return <div>No details found</div>;
    }


    return (
        <div className="details-container">
            <h2>{details.title}</h2>
            <img src={details.image} alt={details.title} />
            <p>{details.description}</p>
            <p>${details.price}</p>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );

}

export default CardDetails;
