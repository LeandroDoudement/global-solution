import React from 'react';
import Header from '../components/header';
import DadosIniciais from '../components/dados-iniciais';
import ContinueButton from '../components/continue-button';
import Image from '../components/image/index'

const AgriculturaSustentavel = () => {
  return (
    <>
      <Header />
      <Image src={'/images/agricultura-tecnologica.jpg'} alt={'Imagem representando agricultura tecnologica'} width={'40%'} height={'40%'}/>
      <DadosIniciais
        title={'Agricultura Sustentável e Metas da ODS 2'}
        text={
          'A agricultura sustentável desempenha um papel fundamental na realização da meta da ODS 2 (Objetivo de Desenvolvimento Sustentável) da ONU, que é "Acabar com a fome, alcançar a segurança alimentar e melhoria da nutrição e promover a agricultura sustentável". Aqui estão algumas maneiras pelas quais a agricultura sustentável está relacionada às metas da ODS 2:'
        }
      />
      <ul className='list'>
        <li>
          Fome Zero: A agricultura sustentável visa aumentar a produção de
          alimentos de forma sustentável, tornando-se mais eficiente no uso de
          recursos naturais, como água e terra. Isso ajuda a garantir a
          disponibilidade e o acesso a alimentos nutritivos, reduzindo a fome e
          a desnutrição.
        </li>
        <li>
          Segurança Alimentar: A agricultura sustentável contribui para a
          segurança alimentar, pois visa diversificar a produção de alimentos e
          aumentar a resiliência dos sistemas agrícolas. Práticas como rotação
          de culturas, agroflorestas e conservação do solo ajudam a manter a
          fertilidade do solo a longo prazo e reduzir a dependência de insumos
          químicos, promovendo a estabilidade da produção de alimentos.
        </li>
        <li>
          Nutrição: A agricultura sustentável não se limita apenas à produção de
          alimentos, mas também enfatiza a produção de alimentos nutritivos e
          saudáveis. Ela promove o cultivo de variedades de culturas
          diversificadas e o acesso a uma dieta equilibrada, rica em vitaminas e
          minerais essenciais, contribuindo para a melhoria da nutrição das
          comunidades.
        </li>
        <li>
          Agricultura Sustentável: O ODS 2 busca promover a agricultura
          sustentável, que envolve práticas agrícolas que são socialmente
          justas, ambientalmente responsáveis e economicamente viáveis. Isso
          inclui o uso eficiente dos recursos naturais, a preservação da
          biodiversidade, a redução do desperdício de alimentos e a adoção de
          métodos de produção que não prejudicam o meio ambiente.
        </li>
        <li>
          Resiliência: A agricultura sustentável é essencial para aumentar a
          resiliência dos sistemas agrícolas às mudanças climáticas e outros
          desafios. Práticas como a conservação do solo, a gestão da água e a
          diversificação de culturas ajudam a proteger os recursos naturais e a
          fortalecer a capacidade dos agricultores de enfrentar eventos
          extremos, como secas e inundações.
        </li>
      </ul>
      <Image src={'/images/sustentabilidade_06.jpg'} alt={'Imagem representando sustentabilidade'} width={'40%'} height={'40%'}/>
      <ContinueButton path='/solucoes' text={'Continue lendo'} />
    </>
  );
};

export default AgriculturaSustentavel;
