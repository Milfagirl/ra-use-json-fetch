import React from 'react';
import UseJsonFetch from '../UseJsonFetch';

export default function Loading(props) {
    const {url,options} = props;
    
    const {data, loading, error} = UseJsonFetch(url, options);
    return (
        <div className='div'>
            <div className = 'loading'>Loading</div>
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
Loading.defaultProps ={
    options : ''
}