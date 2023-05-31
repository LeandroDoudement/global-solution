import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import DadosDaFome from './pages/dados-da-fome';
import InsegurancaAlimentar from './pages/inseguranca-alimentar';
import AgriculturaSustentavel from './pages/agricultura-sustentavel';
import Solucoes from './pages/solucoes';
import '@fontsource/roboto';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/dadosdafome' component={DadosDaFome} />
      <Route exact path='/inseguranca' component={InsegurancaAlimentar} />
      <Route exact path='/agricultura' component={AgriculturaSustentavel} />
      <Route exact path='/solucoes' component={Solucoes} />
    </Switch>
  );
}

export default App;
