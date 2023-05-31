import React from 'react';
import Header from '../components/header';
import DadosIniciais from '../components/dados-iniciais';
import ContinueButton from '../components/continue-button';

const Solucoes = () => {
  return (
    <>
      <Header />
      <DadosIniciais 
      title={'Soluções Inovadoras para um Futuro Alimentar Sustentável'}
      text={'Nesta página, abordamos soluções inovadoras e criativas para enfrentar os desafios da fome e da escassez de alimentos. Acreditamos que a tecnologia e a colaboração são ferramentas poderosas para transformar a realidade atual e criar um futuro alimentar mais seguro e justo. Apresentamos aqui projetos e iniciativas que integram inteligência artificial, logística eficiente e ação comunitária para conectar produtores a famílias carentes, reduzir o desperdício alimentar e promover a utilização completa dos alimentos. Além disso, compartilhamos receitas e dicas práticas para aproveitar ao máximo os alimentos, reduzindo a perda de nutrientes e evitando o desperdício. Acreditamos que o conhecimento e a educação são fundamentais para promover mudanças positivas em nossa relação com a alimentação. Explore esta página e inspire-se com ideias que podem fazer a diferença. Junte-se à Global Solution e seja parte dessa transformação em busca de um futuro alimentar sustentável para todos.'}
      />
      <ContinueButton path='/' text={'Voltar para a página inicial'} />
    </>
  );
};

export default Solucoes;
