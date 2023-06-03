import React from 'react';
import Header from '../components/header';
import DadosIniciais from '../components/dados-iniciais';
import ContinueButton from '../components/continue-button';
import Image from '../components/image';
const DadosDaFome = () => {
  return (
    <>
      <Header />
      <DadosIniciais
        title={'Dados da fome'}
        text={
          'Para falarmos sobre a fome no mundo primeiro temos que saber:<br><br> O que é a fome? <br><br> Fome é a privação de uma alimentação nutritiva, de qualidade e suficiente que possa ter duração anual. Caso isso não ocorra, gera problemas psicológicos e físicos. Pode não ser do conhecimento de muitos, mas a fome no mundo é ocasionada pela má distribuição de alimentos, dentre outras causas, como por exemplo; problemas econômicos, conflitos armados, desemprego, desastres climáticos... A fome é um problema global alarmante que afeta milhões de pessoas em todo o mundo. Segundo dados recentes, em 2020, entre 720 milhões e 811 milhões de indivíduos estavam sofrendo com a fome, um aumento preocupante em relação ao ano anterior. Além disso, mais de 30% da população mundial, o equivalente a 2,4 bilhões de pessoas, viviam em insegurança alimentar moderada ou severa, sem acesso regular a alimentos adequados. Esses números demonstram a urgência de tomar medidas efetivas para combater a fome e garantir a segurança alimentar para todos. Nesta página, apresentamos fatos e estatísticas sobre a fome, destacando a magnitude do problema e a necessidade de ação imediata.'
        }
      />
      <Image src='/images/mapa-fome.png' alt='Mapa da fome' width={'25%'} height={'25%'} />
      <Image src='/images/fome-mundo.png' alt='Mapa da fome' width={'40%'} height={'40%'}/>
      <Image src='/images/fome-brasil.png' alt='Mapa da fome' width={'40%'} height={'40%'}/>
      <ContinueButton path='/inseguranca' text={'Continue lendo'} />
    </>
  );
};

export default DadosDaFome;
