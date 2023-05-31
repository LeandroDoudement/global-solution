import React from 'react';
import Header from '../components/header';
import DadosIniciais from '../components/dados-iniciais';
import ContinueButton from '../components/continue-button';

const AgriculturaSustentavel = () => {
  return (
    <>
      <Header />
      <DadosIniciais 
      title={'Agricultura Sustentável e Metas da ODS 2'}
      text={'A agricultura sustentável desempenha um papel fundamental na busca pela segurança alimentar e na promoção do desenvolvimento sustentável. É por isso que nos comprometemos a implementar práticas agrícolas responsáveis e a alcançar as metas estabelecidas pelo Objetivo de Desenvolvimento Sustentável 2 (ODS 2). Nesta página, apresentamos dados e informações relevantes sobre a agricultura sustentável e as metas estabelecidas pelo ODS 2. Você poderá explorar gráficos interativos que destacam o progresso alcançado até o momento e os desafios que ainda precisam ser superados. Além disso, destacamos iniciativas e tecnologias inovadoras que estão impulsionando a agricultura sustentável em todo o mundo. Descubra como a inteligência artificial, o uso eficiente de recursos e as práticas agrícolas resilientes podem transformar a maneira como produzimos alimentos e garantir um futuro sustentável para todos.'}
      />
      <ContinueButton path='/solucoes' text={'Continue lendo'} />
    </>
  );
};

export default AgriculturaSustentavel;
