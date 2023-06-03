/* eslint-disable react/prop-types */
import React from 'react';

const DadosIniciais = ({ title, text }) => {
    return(
        <>
      <div className='container-apresentacao'>
        <h1>{title}</h1>
        <p
          className='apresentacao-text'
          dangerouslySetInnerHTML={{ __html: text }}
        ></p>
      </div>
    </>
    )

}

export default DadosIniciais;