import React from 'react'
import '../css/CustomFieldsMenu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class CustomFieldsMenu extends React.Component {
  render() {
    return (
      <div className='custom-menu-wrapper'>
        <nav className='custom-navbar' >
            <ul className="nav nav-tabs custom-tabs">
              <li className="nav-item">
                <a className="nav-link active custom-link" href="#">People</a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-link" href="#">Donations</a>
              </li>
            </ul>
        </nav>
        <div className=" people">
          <h3 className='people-title'>Sharing custom field settings</h3>
          <p className='people-subtext'>You are sharing custom field settings. All custom fields you create will automatically become available to your networked nations.</p>
        </div>

       <form className=' people-form'>
            <div className="form-group">
              <label htmlFor="nameInput" className='people-label'>Name*</label>
              <br></br>
              <input type="text" className="form-control people-input" id="nameInput" placeholder=""/>
            </div>
            <div className="form-group">
              <label htmlFor="slugInput" className='people-label'>Slug*</label>
              <br></br>
              <input type="text" className="form-control people-input" id="slugInput" placeholder=""/>
              <small id="slug-text" className="text-muted">Choose carefully, for data integrity reasons, this cannot be changed later.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="fieldTypeInput" placeholder='Select option' className=' people-label'>Field type*</label>
              <br></br>
              <select className="form-control" id="fieldTypeInput">
              <option defaultValue>Select option</option>
                <option>Text</option>
                <option>Checkbox</option>
                <option>Multiple Choice</option>
              </select>

              <br></br>
              <div className=' custom-btn-div text-left'>
              <button type="submit" className="btn custom-btn btn-primary">Create field</button>
              </div>
           </div>
          </form>

          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr className='table-header'>
                  <th scope="col" className='table-header col1'></th>
                  <th scope="col" className='table-header col2'>Name</th>
                  <th scope="col" className='table-header'>Slug</th>
                  <th scope="col" className='table-header'>Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className='edit-btn col1'>Edit</th>
                  <td className='col2'>Nation slug</td>
                  <td>nationslug</td>
                  <td>Text</td>
                  <td className="dropdown del-btn id='btn1'"><a className="btn btn-default actionButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <FontAwesomeIcon icon="chevron-down" id='chevron-down' />
                  </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <a className="dropdown-item" href="#">Delete</a>
                    </div>                  
                  </td>
                </tr>
                <tr>
                  <th scope="row" className='edit-btn col1'>Edit</th>
                  <td className='col2'>DNS provider</td>
                  <td>dns_provider</td>
                  <td>Text</td>
                  <td className="dropdown del-btn id='btn2'"><a className="btn btn-default actionButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <FontAwesomeIcon icon="chevron-down" id='chevron-down' />
                  </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <a className="dropdown-item" href="#">Delete</a>
                    </div>                  
                  </td>
                </tr>
                <tr>
                  <th scope="row" className='edit-btn col1'>Edit</th>
                  <td className='col2'>Web designer</td>
                  <td>web_designer</td>
                  <td>Checkbox</td>
                  <td className="dropdown del-btn id='btn3'"><a className="btn btn-default actionButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <FontAwesomeIcon icon="chevron-down" id='chevron-down' />
                  </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <a className="dropdown-item" href="#">Delete</a>
                    </div>                  
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>

    )
  }
}
