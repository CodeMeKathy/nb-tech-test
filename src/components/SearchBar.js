import React from 'react'
import '../css/SearchBar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form className="form-inline">
          <div className="input-group search-people-div">
            <button className="btn btn-default search-btn" type="submit"><FontAwesomeIcon icon="search" id='search-icon'/></button>
            <input className="form-control search-input" type="search" placeholder="Search People" aria-label="Search"/>
          </div>
        </form>      
      </div>
    )
  }
}

