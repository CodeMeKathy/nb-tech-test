import React from 'react'

import { AddRecordForm } from './AddRecordForm'

import '../css/CustomFieldsMenu.css'
import '../css/Records.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class CustomFieldsMenu extends React.Component {
	render() {
		return (
			<div className='custom-menu-wrapper'>
				<nav className='custom-navbar'>
					<ul className='nav nav-tabs custom-tabs'>
						<li className='nav-item'>
							<a className='nav-link active custom-link' href='#'>
								People
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link custom-link' href='#'>
								Donations
							</a>
						</li>
					</ul>
				</nav>
				<div className=' people'>
					<h3 className='people-title'>Sharing custom field settings</h3>
					<p className='people-subtext'>
						You are sharing custom field settings. All custom fields you create will automatically
						become available to your networked nations.
					</p>
				</div>

				<AddRecordForm addNewRecord={this.props.addNewRecord} />

				<div className='table-responsive'>
					<table className='table table-hover'>
						<thead>
							<tr className='table-header'>
								<th scope='col' className='table-header col1' />
								<th scope='col' className='table-header col2'>
									Name
								</th>
								<th scope='col' className='table-header'>
									Slug
								</th>
								<th scope='col' className='table-header'>
									Type
								</th>
							</tr>
						</thead>
					</table>
				</div>
			</div>
		)
	}
}
