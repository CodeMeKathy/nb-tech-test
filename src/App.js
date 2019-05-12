import React from 'react';
import './App.css';

import SettingsHeader from './components/SettingsHeader.js'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch)

function App() {
  return (
    <div className="App">
      <SettingsHeader />
    </div>
  );
}

export default App;
