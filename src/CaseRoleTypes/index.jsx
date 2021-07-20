import PropTypes         from 'prop-types'
import React             from 'react'
import PaginatedTypeList from '../EditablePaginatedTypeList'

export default class Index extends React.Component {

	static propTypes = {
		id: PropTypes.string.isRequired
	}

	static defaultProps = {}

	render () {
		const componentName = 'CaseRoleTypesComponent'
		const id            = `${componentName}_${this.props.id}`
		return (
			<div id = {id} className = {componentName} >
				<h1 >Case Role Types</h1 >
				<PaginatedTypeList id = {id} url = {'/people_and_organizations/api/caseRoleTypes/search/roots'}
													 responseJsonToList = {response => response._embedded.caseRoleTypes} />
			</div >
		)
	}
}

