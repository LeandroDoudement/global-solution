import React from 'react';
import Header from '../components/header';
import Apresentacao from '../components/apresentacao';
import ContinueButton from '../components/continue-button';
import Carousel from '../components/carousel';
const Home = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Apresentacao />
      <ContinueButton path='/dadosdafome' text={'Continue lendo'} />
    </>
  );
};

export default Home;
