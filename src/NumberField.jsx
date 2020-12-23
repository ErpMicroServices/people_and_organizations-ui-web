import PropTypes from 'prop-types'
import React     from 'react'

export default class NumberField extends React.Component {

	static propTypes = {
		id      : PropTypes.string.isRequired,
		label   : PropTypes.string.isRequired,
		value   : PropTypes.number.isRequired,
		onChange: PropTypes.func.isRequired
	}

	static defaultProps = {}

	render () {
		const componentName = 'NumberFieldComponent'
		const id            = `${componentName}_${this.props.id}`
		return (
			<div id={id} className={componentName} >
				<label htmlFor={id} > {this.props.label} </label >
				<input type={'number'} name={id} id={id} value={this.props.value}
					onChange={this.props.onChange} />
			</div >
		)
	}
}

