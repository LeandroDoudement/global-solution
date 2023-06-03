import React from 'react';
import Header from '../components/header';
import DadosIniciais from '../components/dados-iniciais';
import ContinueButton from '../components/continue-button';
import Image from '../components/image';

const InsegurancaAlimentar = () => {
  return (
    <>
      <Header />
      <DadosIniciais
        title={'Insegurança Alimentar e Dados Interativos'}
        text={
          'A insegurança alimentar é uma realidade preocupante que afeta milhões de pessoas em todo o mundo. Para compreender melhor essa problemática, oferecemos informações detalhadas sobre as causas, os impactos e as possíveis soluções. Nesta página, você poderá explorar dados e estatísticas sobre a insegurança alimentar de forma interativa. Utilizando gráficos, mapas e recursos interativos, você poderá visualizar a magnitude do problema em diferentes regiões e compreender os desafios enfrentados. Além disso, por meio de um formulário interativo, você poderá inserir suas próprias informações demográficas e receber um feedback personalizado sobre a insegurança alimentar em sua área. Acreditamos que ao conhecer melhor a realidade local, podemos desenvolver estratégias mais eficazes para combater a fome.'
        }
      />
      <Image
        src={'/images/inseguranca-alimentar.jpg'}
        alt={'Insegurança alimentar no mundo'}
        width={'40%'}
        height={'40%'}
      />
      <ContinueButton path='/agricultura' text={'Continue lendo'} />
    </>
  );
};

export default InsegurancaAlimentar;
