import React from 'react';
import Header from '../components/header';
import Slider from '../components/slider';
import Apresentacao from '../components/apresentacao';
import ContinueButton from '../components/continue-button';

const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <Apresentacao />
      <ContinueButton path='/dadosdafome' text={'Continue lendo'} />
    </>
  );
};

export default Home;
