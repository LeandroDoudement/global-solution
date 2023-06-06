import React, { useEffect, useState } from 'react';
import './styles.css';

const Counter = () => {
  const countdownDate = new Date('January 1, 2030 00:00:00').getTime();
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='counter-container'>
      <h1>Contador para 2030</h1>
      <div>
        <p>
          Meta da ONU para a ODS 2 (fim da fome mundial): 2030. Faltam:
        </p>
        <p>{timeRemaining.days} Dias</p>
        <p>{timeRemaining.hours} Horas</p>
        <p>{timeRemaining.minutes} Minutos</p>
        <p>{timeRemaining.seconds} Segundos</p>
      </div>
    </div>
  );
};

export default Counter;
