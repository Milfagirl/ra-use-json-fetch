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
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    setData('Loading..')
                    setError(response.status);
                    setLoading(false);
                }
                if (timestampRef.current === timestamp) {
                    const data = await response.json();
                    console.log(data);
                    switch (url) {
                        case 'http://localhost:7070/data':
                            setData(data.data);
                            setError('200 OK');
                            setLoading(true);
                            break
                        case 'http://localhost:7070/error':
                            setData('Ошибка')
                            setError(`500 ${data.status}`);
                            setLoading(false);
                            break
                        case 'http://localhost:7070/loading':
                            setData('Loading')
                            setError(data.status);
                            setLoading(true)
                            break
                        default:
                    }

                }

            }
            catch (e) {
                console.log(error);
            }
            finally {
                setLoading(true);
            }


        }

        fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return [
        { data, loading, error }];
}