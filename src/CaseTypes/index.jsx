import PropTypes from 'prop-types'
import React     from 'react'
import ErpType   from '../ErpType'
import TextField from '../fields/TextField'

export default class CaseTypes extends React.Component {

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
		const componentName = 'CaseTypes'
		const id            = `${componentName}_${this.props.id}`
		return (
			<div id = {id} className = {componentName} >
				<h1 >Case Types</h1 >
				<form >
					<TextField id = {'description'} label = {'Description'} value = {this.state.value.description}
										 onChange = {newValue => this.onValueChange({description: newValue})} />
					<button id = {'saveType'} type = {'submit'} onClick = {this.saveCaseType} >Add</button >
				</form >
			</div >
		)
	}

	state = {
		value: new ErpType({})
	}
}

