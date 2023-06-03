import React from 'react';
import './styles.css';

const Apresentacao = () => {
  return (
    <div className='container-apresentacao'>
      <h1>Apresentação</h1>
      <p className='apresentacao-text'>
        Bem-vindo à Global Solution, uma plataforma inovadora que utiliza
        tecnologia e inteligência artificial para enfrentar um dos maiores
        desafios globais: a fome e a escassez de alimentos. Nossa missão é
        combater a insegurança alimentar por meio de soluções sustentáveis e
        promover a colaboração entre produtores, governos e comunidades para
        garantir que ninguém passe fome. Neste site, você encontrará informações
        abrangentes sobre a problemática da fome, dados estatísticos impactantes
        e soluções inovadoras que podem fazer a diferença. Explore nossas
        páginas e descubra como a tecnologia pode ser uma aliada poderosa na
        luta contra a fome, impulsionando a agricultura sustentável e conectando
        doadores a famílias carentes. Não deixe de conferir nosso vídeo pitch,
        que resume de forma concisa e envolvente a essência do nosso projeto.
        Junte-se a nós nessa jornada em busca de um futuro alimentar mais seguro
        e justo para todos.
      </p>
      <div className='video-responsive'>
        <iframe
          width='853'
          height='480'
          src={`https://www.youtube.com/embed/WFwG6kLEcuY`}
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title='Embedded youtube'
        />
      </div>
    </div>
  );
};

export default Apresentacao;
