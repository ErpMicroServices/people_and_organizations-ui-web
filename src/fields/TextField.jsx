import PropTypes from 'prop-types'
import React     from 'react'
import BaseField from './BaseField'

export default class TextField extends React.Component {

	static propTypes = {
		id      : PropTypes.string.isRequired,
		label   : PropTypes.string.isRequired,
		value   : PropTypes.string.isRequired,
		onChange: PropTypes.func.isRequired
	}

	static defaultProps = {}

	render () {
		const componentName = 'Text'
		const id            = `${this.props.id}${componentName}`
		return <BaseField id = {id} label = {this.props.label} value = {this.props.value}
											onChange = {this.props.onChange} type = {'text'} />
	}
}

