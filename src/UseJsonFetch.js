/* eslint-disable no-fallthrough */
import { useState, useEffect, useRef } from 'react';
export default function UseJsonFetch(url, options) {
    const [data, setData] = useState('');
    const [loading, setLoading] = useState('Loading..');
    const [error, setError] = useState('');
    const timestampRef = useRef();

    useEffect(() => {
        const fetchData = async () => {
            const timestamp = Date.now();
            timestampRef.current = timestamp;
            if (!options) {
                try {
                    const response = await fetch(url);
                    if (timestampRef.current === timestamp) {
                        const data = await response.json();
                        setData(data.data ? data.data : data.status);
                    }
                }
                catch (e) {
                    setError(e);
                    setLoading(false);
                }
                finally {
                    setLoading(true);
                }

            }


        }

        fetchData();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])

    return (
        {
            data,
            loading,
            error
        }
    )
}