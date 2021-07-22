import PropTypes         from 'prop-types'
import React             from 'react'
import PaginatedTypeList from '../ErpTypeComponent/list'


export default class index extends React.Component {

	static propTypes = {
		id: PropTypes.string.isRequired
	}

	static defaultProps = {}

	render () {
		const componentName = 'partyTypesComponent'
		const id            = `${componentName}_${this.props.id}`
		return (
			<div id = {id} className = {componentName} >
				<h1 >Party Types</h1 >
				<PaginatedTypeList id = {id} url = {'/people_and_organizations/api/partyTypes/search/roots'}
													 responseJsonToList = {response => response._embedded.partyTypes} />
			</div >
		)
	}
}

