import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const routes = [
  { path: '/', label: 'Home' },
  { path: '/dadosdafome', label: 'Dados da fome' },
  { path: '/inseguranca', label: 'Insegurança Alimentar e Dados Interativos' },
  { path: '/agricultura', label: 'Agricultura Sustentável e Metas da ODS 2' },
  {
    path: '/solucoes',
    label: 'Soluções Inovadoras para um Futuro Alimentar Sustentável',
  },
];

const Logo = () => (
  <img
    src="/images/hunger-symbol.png"
    alt="Imagem representando fome"
    height={'50px'}
    width={'50px'}
  />
);

const DesktopLinks = () => {
  return (
    <ul className="desktop">
      <li>
        <Logo />
      </li>
      {routes.map((route) => (
        <li key={route.path}>
          <Link to={route.path}>{route.label}</Link>
        </li>
      ))}
    </ul>
  );
};

const MobileLinks = () => {
  const [show, setShow] = useState(false);
  const toggleDropdown = () => {
    setShow(!show);
  };
  const close = () => {
    setShow(false);
  };

  return (
    <div className="mobile">
      <Logo />
      <div className="dropdown">
        <button className="drop-button" onClick={toggleDropdown}>
          <div className="white-line" />
          <div className="white-line" />
          <div className="white-line" />
        </button>
        <div className={`dropdown-content ${show ? 'show' : ''}`}>
          <span className="close" onClick={close}>
            X
          </span>
          {routes.map((route) => (
            <Link key={route.path} to={route.path}>
              {route.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <nav>
        <DesktopLinks />
        <MobileLinks />
      </nav>
    </header>
  );
};

export default Header;