import React from 'react'
import '../css/DefaultsMenu.css'

export default class DefaultsMenu extends React.Component {
  render() {
    return (
      <div className='defaults-menu-wrapper'>
        <nav className='defaults-navbar' >
            <ul className="nav nav-tabs defaults-tabs">
              <li className="nav-item">
                <a className="nav-link defaults-link" href="#">Basics</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active defaults-link" href="#">Custom fields</a>
              </li>
              <li className="nav-item">
                <a className="nav-link defaults-link" href="#">Social capital</a>
              </li>
              <li className="nav-item">
                <a className="nav-link defaults-link" href="#">Finance types</a>
              </li>
              <li className="nav-item">
                <a className="nav-link defaults-link" href="#">Dashboards</a>
              </li>
              <li className="nav-item">
                <a className="nav-link defaults-link" href="#">Permission sets</a>
              </li>
              <li className="nav-item">
                <a className="nav-link defaults-link" href="#">Unsubscribe</a>
              </li>
            </ul>
          </nav>
      </div>
    )
  }
}
