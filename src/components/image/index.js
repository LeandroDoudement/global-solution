/* eslint-disable react/prop-types */
import React from 'react';
import './styles.css';

const Image = ({ src, alt, height, width }) => {
    return(
        <div className='image-container'>
            <img src={src} alt={alt} height={height} width={width}/>
        </div>
    )
}

export default Image;