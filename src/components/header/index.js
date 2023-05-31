import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/dadosdafome'>Dados da fome</Link>
          </li>
          <li>
            <Link to='/inseguranca'>Insegurança Alimentar e Dados Interativos</Link>
          </li>
          <li>
            <Link to='/agricultura'>Agricultura Sustentável e Metas da ODS 2</Link>
          </li>
          <li>
            <Link to='/solucoes'>Soluções Inovadoras para um Futuro Alimentar Sustentável</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
