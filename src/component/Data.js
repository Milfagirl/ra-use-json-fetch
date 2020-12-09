import React from 'react';
import UseJsonFetch from '../UseJsonFetch';

export default function Data(props) {
    const { url, options } = props;

    const [{ data, loading, error }] = UseJsonFetch(url, options);
    return (
        <div className='div'>
            <div className = 'data'>Data</div>
            <div>
                {data}
            </div>
            <div>
                {loading}
            </div>
            <div>
                {error}
            </div>
        </div>
    )
}
Data.defaultProps = {
    options: ''
}