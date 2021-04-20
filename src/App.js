import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import TakeMake01 from './pages/TakeMake/TakeMake01';
import TakeMake02 from './pages/TakeMake/TakeMake02';
import TakeMake03 from './pages/TakeMake/TakeMake03';
import TakeMake04 from './pages/TakeMake/TakeMake04';
import TakeMake05 from './pages/TakeMake/TakeMake05';
import TakeMake06 from './pages/TakeMake/TakeMake06';
import TakeMake07 from './pages/TakeMake/TakeMake07';
import TakeMake08 from './pages/TakeMake/TakeMake08';
import TakeMake09 from './pages/TakeMake/TakeMake09';
import TakeMake10 from './pages/TakeMake/TakeMake10';

import Header from './components/Header';
import Footer from './components/Footer';
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Maker Madness 7</h3>
      </header>
    </div>
  );
}
*/
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/takemake/takemake01" component={TakeMake01} exact />
          <Route path="/takemake/takemake02" component={TakeMake02} exact />
          <Route path="/takemake/takemake03" component={TakeMake03} exact />
          <Route path="/takemake/takemake04" component={TakeMake04} exact />
          <Route path="/takemake/takemake05" component={TakeMake05} exact />
          <Route path="/takemake/takemake06" component={TakeMake06} exact />
          <Route path="/takemake/takemake07" component={TakeMake07} exact />
          <Route path="/takemake/takemake08" component={TakeMake08} exact />
          <Route path="/takemake/takemake09" component={TakeMake09} exact />
          <Route path="/takemake/takemake10" component={TakeMake10} exact />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
