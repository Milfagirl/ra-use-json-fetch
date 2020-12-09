import React from 'react';
import UseJsonFetch from '../UseJsonFetch';

export default function Error(props) {
    const {url,options} = props;
    
    const [{data, loading, error}] = UseJsonFetch(url, options);
    return (
        <div className='div'>
            <div className = 'error'>Error</div>
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
Error.defaultProps ={
    options : ''
}