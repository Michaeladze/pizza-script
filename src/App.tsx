import React from 'react';
import './App.scss';
import Router from './router/Router';
import { routes } from './router/config';
import Notifications from './components/molecules/Notifications';

function App() {

  return (
    <div className='root'>
      <Router routes={routes}/>
      <Notifications/>
    </div>
  );
}

export default App;
