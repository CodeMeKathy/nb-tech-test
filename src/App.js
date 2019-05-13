import React from 'react'
import './App.css'

import SettingsHeader from './components/SettingsHeader.js'
import DefaultsMenu from './components/DefaultsMenu'
import CustomFieldsMenu from './components/CustomFieldsMenu'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch, faChevronDown)

function App() {
  return (
    <div className="App">
      <SettingsHeader />
      <DefaultsMenu />
      <CustomFieldsMenu />

    </div>
  );
}

export default App;
