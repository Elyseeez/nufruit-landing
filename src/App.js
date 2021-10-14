import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/header';
import {Targets, Track, Calories, Join} from './components/content';

import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/app.scss';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Targets/>
      <Track/>
      <Calories/>
      <Join/>
    </div>
    </Router>
  );
}

export default App;
