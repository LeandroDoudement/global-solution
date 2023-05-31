import React from 'react';
import Header from '../components/header';
import DadosIniciais from '../components/dados-iniciais';
import ContinueButton from '../components/continue-button';
const DadosDaFome = () => {
  return (
    <>
      <Header />
      <DadosIniciais
        title={'Dados da fome'}
        text={
          'A fome é um problema global alarmante que afeta milhões de pessoas em todo o mundo. Segundo dados recentes, em 2020, entre 720 milhões e 811 milhões de indivíduos estavam sofrendo com a fome, um aumento preocupante em relação ao ano anterior. Além disso, mais de 30% da população mundial, o equivalente a 2,4 bilhões de pessoas, viviam em insegurança alimentar moderada ou severa, sem acesso regular a alimentos adequados. Esses números demonstram a urgência de tomar medidas efetivas para combater a fome e garantir a segurança alimentar para todos. Nesta página, apresentamos fatos e estatísticas sobre a fome, destacando a magnitude do problema e a necessidade de ação imediata. Explore os dados de forma interativa e entenda melhor a complexidade dessa questão global.'
        }
      />
      <ContinueButton path='/inseguranca' text={'Continue lendo'} />
    </>
  );
};

export default DadosDaFome;
