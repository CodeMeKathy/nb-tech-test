import React from 'react'
import '../App.css'
import '../css/SettingsHeader.css'

export default class SettingsHeader extends React.Component {
  render() {
    return (
      <div>
        <div className='settings-wrapper'>
          <img id='avatar' src='https://github.com/CodeMeKathy/nb-tech-test/blob/master/public/images/Avatar.png?raw=true' alt="avatar"/>
          <h1 className='settings-title'>Settings</h1>
          {/* <Searchbar /> */}
          <nav className='setting-navbar' >
            <ul className="nav nav-tabs settings-tabs">
              <li className="nav-item">
                <a className="nav-link" href="#">Your account</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Defaults</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Political</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Domains</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Payment processors</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Apps</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Developer</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Database</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Privacy</a>
              </li>
            </ul>
          </nav>
        </div>

      </div>
    )
  }
}
