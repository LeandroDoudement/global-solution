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
            <Link to='/pagina2'>Página 2</Link>
          </li>
          <li>
            <Link to='/pagina3'>Página 2</Link>
          </li>
          <li>
            <Link to='/pagina4'>Página 2</Link>
          </li>
          <li>
            <Link to='/pagina5'>Página 2</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
