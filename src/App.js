import React from 'react';
import './App.css';

import SettingsHeader from './components/SettingsHeader.js'
import DefaultsMenu from './components/DefaultsMenu'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch)

function App() {
  return (
    <div className="App">
      <SettingsHeader />
      <DefaultsMenu />
    </div>
  );
}

export default App;
