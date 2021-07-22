import PropTypes        from 'prop-types'
import React            from 'react'
import ErpTypeComponent from '../ErpTypeComponent'

export default class CaseStatusTypes extends React.Component {

	static propTypes = {
		id: PropTypes.string.isRequired
	}

	static defaultProps = {}

	render () {
		const componentName = 'caseStatusTypesComponent'
		const id            = `${componentName}_${this.props.id}`
		return (
			<div id = {id} className = {componentName} >
				<h1 >Case Status Types</h1 >
				<ErpTypeComponent id = {componentName} />
			</div >
		)
	}


}

