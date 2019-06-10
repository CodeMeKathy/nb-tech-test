import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../css/Records.css'

class DBRecords extends React.Component {
	render() {
		return (
			<div className='custom-menu-wrapper' id='record-wrapper'>
				<table className='table table-hover'>
					<tbody>
						<tr>
							<th scope='row' className='edit-btn col1'>
								Edit
							</th>
							<td className='col2 recordItem'>{this.props.details.name}</td>
							<td className='col3 recordItem'>{this.props.details.slug}</td>
							<td className='col4 recordItem'>{this.props.details.type}</td>
							<td className='dropdown del-btn' id='btn1'>
								<a
									className='btn btn-default actionButton'
									data-toggle='dropdown'
									aria-haspopup='true'
									aria-expanded='false'
								>
									{' '}
									<FontAwesomeIcon icon='chevron-down' id='chevron-down' />
								</a>
								<div className='dropdown-menu' aria-labelledby='dropdownMenuLink'>
									<button
										className='dropdown-item'
										onClick={() => this.props.deleteRecord(this.props.index)}
									>
										Delete
									</button>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}

export default DBRecords
