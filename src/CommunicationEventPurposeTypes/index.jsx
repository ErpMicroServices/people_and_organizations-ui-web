import PropTypes        from 'prop-types'
import React            from 'react'
import ErpTypeComponent from '../ErpTypeComponent'

export default class CommunicationEventPurposeTypes extends React.Component {

	static propTypes = {
		id: PropTypes.string.isRequired
	}

	static defaultProps = {}

	render () {
		const componentName = 'CommunicationEventPurposeTypesComponent'
		const id            = `${componentName}_${this.props.id}`
		return (
			<div id = {id} className = {componentName} >
				<h1 >Communication Event Purpose Types</h1 >
				<ErpTypeComponent id = {componentName} uri = {'/communicationEventPurposeTypes'} />
			</div >
		)
	}
}

