import PropTypes from 'prop-types'
import React     from 'react'
import BaseField from './BaseField'

export default class NumberField extends React.Component {

	static propTypes = {
		id      : PropTypes.string.isRequired,
		label   : PropTypes.string.isRequired,
		value   : PropTypes.number.isRequired,
		onChange: PropTypes.func.isRequired
	}

	static defaultProps = {}

	render () {
		const componentName = 'Number'
		const id            = `${componentName}`
		return <BaseField id = {this.props.id} label = {this.props.label} value = {this.props.value}
											onChange = {this.props.onChange} type = {'number'} />
	}
}

