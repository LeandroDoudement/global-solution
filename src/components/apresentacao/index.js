import React from 'react';
import './styles.css';
import ContinueButton from '../continue-button';

const Apresentacao = () => {
  return (
    <div className='container-apresentacao'>
      <h1>Apresentação</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti neque
        sed, distinctio ullam cupiditate quod vel quam dicta, blanditiis magnam
        obcaecati cumque debitis! Inventore iste tempora quis dolore rerum
        culpa! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
        est corrupti odit omnis doloribus laboriosam et consequatur deserunt
        nulla, praesentium modi voluptate eveniet tempora voluptas sunt
        accusantium aperiam, eaque voluptatum.
      </p>
      <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/GBIIQ0kP15E`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
        <ContinueButton path='/pagina2' />
    </div>
  );
};

export default Apresentacao;
