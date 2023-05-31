import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

// eslint-disable-next-line react/prop-types
const ContinueButton = ({ path }) => {
  const history = useHistory;

  const handleClick = () => {
    history.push(path);
  };

  return (
    <button className='continue-button' type='button' onClick={handleClick}>
      Continue lendo aqui
    </button>
  );
};

export default ContinueButton;
