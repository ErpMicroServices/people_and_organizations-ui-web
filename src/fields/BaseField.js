import PropTypes from 'prop-types'
import React     from 'react'

/**
 * Created by JimBarrows on 7/21/21.
 */
export default class BaseField extends React.Component {

	static propTypes = {
		id      : PropTypes.string.isRequired,
		label   : PropTypes.string.isRequired,
		value   : PropTypes.any.isRequired,
		onChange: PropTypes.func.isRequired,
		type    : PropTypes.string.isRequired
	}

	static defaultProps = {}

	render () {
		const componentName = 'Field'
		const id            = `${this.props.id}${componentName}`
		return (
			<div id = {id} className = {componentName} >
				<label id = {`${id}Label`} htmlFor = {id} > {this.props.label} </label >
				<input type = {this.props.type} name = {`${id}Input`} id = {`${id}Input`} value = {this.props.value}
							 onChange = {e => this.props.onChange(e.target.value)} />
			</div >
		)
	}
}
