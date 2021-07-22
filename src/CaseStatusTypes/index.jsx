import PropTypes from 'prop-types'
import React     from 'react'
import ErpEdit   from '../ErpEdit'
import ErpType   from '../ErpType'

export default class CaseStatusTypes extends React.Component {

	static propTypes = {
		id: PropTypes.string.isRequired
	}

	static defaultProps = {}

	onValueChange = value => this.setState({value})

	saveCaseType = e => {
		e.preventDefault()
		fetch('/people_and_organizations/api/caseTypes', {
			method : "post",
			headers: {
				"Content-Type": "application/json"
			},
			body   : JSON.stringify({
																description: this.state.value.description
															})
		})
	}

	render () {
		const componentName = 'caseStatusTypesComponent'
		const id            = `${componentName}_${this.props.id}`
		return (
			<div id = {id} className = {componentName} >
				<h1 >Case Status Types</h1 >
				<ErpEdit value = {this.state.value} onChange = {newValue => this.onValueChange({description: newValue})}
								 onClick = {this.saveCaseType} />
			</div >
		)
	}

	state = {
		value: new ErpType({})
	}
}

