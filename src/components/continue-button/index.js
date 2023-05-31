import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

// eslint-disable-next-line react/prop-types
const ContinueButton = ({ path, text }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(path);
  };

  return (
    <div className='button-container'>
    <button className='continue-button' type='button' onClick={handleClick}>
      {text}
    </button>
    </div>
  );
};

export default ContinueButton;
