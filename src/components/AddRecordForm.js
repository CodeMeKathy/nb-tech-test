import React from 'react'
import '../css/CustomFieldsMenu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class AddRecordForm extends React.Component {
	nameRef = React.createRef()
	slugRef = React.createRef()
	fieldTypeRef = React.createRef()

	createNewRecord = (event) => {
		event.preventDefault()
		const record = {
			name: this.nameRef.current.value,
			slug: this.slugRef.current.value,
			type: this.fieldTypeRef.current.value
		}

		this.props.addNewRecord(record)
		event.currentTarget.reset()
	}
	render() {
		return (
			<div className='people-form'>
				<form onSubmit={this.createNewRecord}>
					<div className='form-group'>
						<label htmlFor='name' className='people-label'>
							Name *
						</label>
						<br />
						<input
							name='name'
							ref={this.nameRef}
							type='text'
							className='form-control people-input'
							id='name'
							placeholder=''
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='slug' className='people-label'>
							Slug*
						</label>
						<br />
						<input
							type='text'
							className='form-control people-input'
							id='slugInput'
							name='slug'
							placeholder=''
							ref={this.slugRef}
						/>
						<small id='slug-text' className='text-muted'>
							Choose carefully, for data integrity reasons, this cannot be changed later.
						</small>
					</div>
					<div className='form-group'>
						<label htmlFor='fieldType' placeholder='Select option' className=' people-label'>
							Field Type*
						</label>
						<br />
						<select
							className='form-control'
							id='fieldType'
							name='fieldType'
							ref={this.fieldTypeRef}
						>
							<option value='Select option'>Select option</option>
							<option value='Text'>Text</option>
							<option value='Checkbox'>Checkbox</option>
							<option value='Multiple choice'>Multiple choice</option>
						</select>

						<br />
						<div className=' custom-btn-div text-left'>
							<button type='submit' className='btn custom-btn btn-primary'>
								Create field
							</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
}
