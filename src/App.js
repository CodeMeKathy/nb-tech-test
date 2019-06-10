import React from 'react'

import SidebarNav from './components/SidebarNav.js'
import SettingsHeader from './components/SettingsHeader.js'
import DefaultsMenu from './components/DefaultsMenu'
import CustomFieldsMenu from './components/CustomFieldsMenu'
import DBRecords from './components/DBRecords'

import './App.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch, faChevronDown)

class App extends React.Component {
	state = {
		tableData: [],
		records: [
			{ name: 'Nation slug', slug: 'nationslug', type: 'Text' },
			{ name: 'DNS provider', slug: 'dns_provider', type: 'Text' },
			{ name: 'Web designer', slug: 'web_designer', type: 'Checkbox' }
		]
	}

	loadTableData = () => {
		const tableData = [...this.state.records]
		this.setState({ tableData })
	}

	addNewRecord = (record) => {
		const tableData = [...this.state.tableData]
		tableData.push(record)
		this.setState({ tableData })
	}

	deleteRecord = (record) => {
		const tableData = [...this.state.tableData]
		const recordIndex = tableData.indexOf(record)

		tableData.splice(recordIndex, 1)
		this.setState({ tableData })
	}

	componentDidMount = () => {
		this.loadTableData()
		console.log(this.state.tableData)
	}

	render() {
		const tableData = this.state.tableData
		return (
			<div className='App'>
				<SidebarNav />
				<SettingsHeader />
				<DefaultsMenu />
				<CustomFieldsMenu 
          tableData={this.state.tableData}
					addNewRecord={this.addNewRecord} 
          deleteRecord={this.deleteRecord}
        />

				<ul>
					{tableData.map((key) => {
						return (
							<DBRecords
								key={key.slug}
								index={key}
								details={key}
								deleteRecord={this.deleteRecord}
							/>
						)
					})}
				</ul>
			</div>
		)
	}
}

export default App
