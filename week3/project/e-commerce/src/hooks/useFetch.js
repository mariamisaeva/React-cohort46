import { useState, useEffect } from 'react';

function useMultiFetch(urls) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await Promise.all(urls.map(urls => fetch(urls)));

                if (!response.ok) {
                    throw new Error(`Error!, status: ${response.status}`);
                }

                const jsonData = await Promise.all(response.map(res => res.json()));

                setData(jsonData);
                // setLoading(false);

            } catch (err) {
                setError(err);
            }

            setLoading(false);

        };

        fetchData();

    }, [urls]);

    return { data, loading, error };
}

export default useMultiFetch;
