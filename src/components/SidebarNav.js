import React from 'react'
import '../css/SidebarNav.css'


export default class SidebarNav extends React.Component {
  render() {
    return (
      <div className="sidebar-nav">
        <div className="row">
          <div className="col-md-2.5 col-xs-1 sidebar">
            <div className="list-group panel">
              <a href="#" className="list-group-item nav-header"><img src="https://github.com/CodeMeKathy/nb-tech-test/blob/master/public/images/NationBuilder%20mark.png?raw=true" alt="NationBuilder Mark" className='header-icon'/> <span className="nav-title-logo"><img src="https://github.com/CodeMeKathy/nb-tech-test/blob/master/public/images/NationBuilder.png?raw=true" alt="NationBuilder"/></span></a>

              <a href="#" className="list-group-item"><img src="https://github.com/CodeMeKathy/nb-tech-test/blob/master/public/images/icons8-combo-chart-64.png?raw=true" alt="Dashboard Nav Icon" className='nav-icon'/> <span className="nav-title">Dashboard</span></a>

              <a href="#" className="list-group-item"><img src="https://github.com/CodeMeKathy/nb-tech-test/blob/master/public/images/icons8-people-64.png?raw=true" alt="People Nav Icon" className='nav-icon'/> <span className="nav-title">People</span> </a>

              <a href="#" className="list-group-item"><img src="https://github.com/CodeMeKathy/nb-tech-test/blob/master/public/images/icons8-web-design-64.png?raw=true" alt="Website Nav Icon" className='nav-icon'/> <span className="nav-title">Website</span> </a>

              <a href="#" className="list-group-item"><img src="https://github.com/CodeMeKathy/nb-tech-test/blob/master/public/images/icons8-chat-64.png?raw=true" alt="Communication Nav Icon" className='nav-icon'/> <span className="nav-title">Communication</span> </a>

              <a href="#" className="list-group-item"><img src="https://github.com/CodeMeKathy/nb-tech-test/blob/master/public/images/icons8-credit-card-64.png?raw=true" alt="Finances Nav Icon" className='nav-icon'/> <span className="nav-title">Finances</span> </a>

              <a href="#" className="list-group-item"><img src="https://github.com/CodeMeKathy/nb-tech-test/blob/master/public/images/icons8-flow-chart-64.png?raw=true" alt="Nations Nav Icon" className='nav-icon'/> <span className="nav-title">Nations</span> </a>

              <a href="#" className="list-group-item"><img src="https://github.com/CodeMeKathy/nb-tech-test/blob/master/public/images/icons8-tune-64.png?raw=true" alt="Settings Nav Icon" className='nav-icon'/> <span className="nav-title">Settings</span> </a>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
