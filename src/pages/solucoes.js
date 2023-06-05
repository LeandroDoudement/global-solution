import React from 'react';
import Header from '../components/header';
import DadosIniciais from '../components/dados-iniciais';
import ContinueButton from '../components/continue-button';
import Image from '../components/image/index'

const Solucoes = () => {
  return (
    <>
      <Header />
      <Image src={'/images/solution.jpg'} alt={'Imagem representando soluções'} width={'40%'} height={'40%'}/>
      <DadosIniciais
        title={'Soluções Inovadoras para um Futuro Alimentar Sustentável'}
        text={
          'O futuro alimentar sustentável é uma questão importante que requer soluções inovadoras. Aqui estão algumas ideias de soluções inovadoras para enfrentar esse desafio:'
        }
      />
      <ul className='list'>
        <li>
          Agricultura vertical: A agricultura vertical envolve o cultivo de
          alimentos em camadas verticais, em vez de horizontalmente em grandes
          áreas de terra. Ela utiliza sistemas hidropônicos ou aeropônicos, onde
          as plantas crescem em soluções nutritivas sem solo ou são pulverizadas
          com nutrientes. A agricultura vertical permite o uso mais eficiente do
          espaço, consome menos água e reduz a necessidade de pesticidas.
        </li>
        <li>
          Alimentos alternativos: Explorar fontes alternativas de alimentos,
          como insetos comestíveis, algas marinhas e proteínas vegetais, pode
          ajudar a diversificar a oferta de alimentos e reduzir a dependência da
          carne convencional. Além disso, a pesquisa em carne cultivada em
          laboratório está progredindo, o que pode oferecer uma alternativa
          sustentável à produção tradicional de carne.
        </li>
        <li>
          Tecnologia de precisão na agricultura: A aplicação de tecnologias como
          sensores, drones, inteligência artificial e análise de dados na
          agricultura permite um uso mais preciso de recursos, como água e
          fertilizantes. Essas tecnologias podem monitorar o crescimento das
          plantas, identificar doenças precocemente e otimizar o uso de insumos,
          contribuindo para uma produção mais eficiente e sustentável.
        </li>
        <li>
          Agricultura regenerativa: A agricultura regenerativa é uma abordagem
          que busca melhorar a saúde do solo, aumentar a biodiversidade e
          reduzir a pegada ambiental da agricultura. Ela envolve práticas como
          rotação de culturas, cultivo de plantas de cobertura e uso de técnicas
          de conservação do solo. A agricultura regenerativa pode ajudar a
          restaurar ecossistemas agrícolas degradados e aumentar a resiliência
          das culturas.
        </li>
        <li>
          Sistemas alimentares locais: Promover sistemas alimentares locais,
          como hortas urbanas e mercados de agricultores, pode reduzir a
          dependência de longas cadeias de suprimentos e minimizar as emissões
          de gases de efeito estufa associadas ao transporte de alimentos. Além
          disso, os sistemas alimentares locais promovem a conexão entre
          produtores e consumidores, permitindo uma compreensão mais direta da
          origem dos alimentos.
        </li>
        <li>
          Educação e conscientização: A educação e a conscientização sobre
          práticas alimentares sustentáveis são fundamentais para promover
          mudanças de longo prazo. Informar as pessoas sobre a importância da
          escolha de alimentos sustentáveis, a redução do desperdício alimentar
          e o apoio a práticas agrícolas sustentáveis pode incentivar a adoção
          de comportamentos mais responsáveis em relação à alimentação.
        </li>
      </ul>
      <ContinueButton path='/' text={'Voltar para a página inicial'} />
    </>
  );
};

export default Solucoes;
