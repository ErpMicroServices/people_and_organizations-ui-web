import PropTypes from 'prop-types'
import React     from 'react'
import TextField from './fields/TextField'

export default class ErpEdit extends React.Component {
	static propTypes = {
		value   : PropTypes.any,
		onChange: PropTypes.func,
		onClick : PropTypes.func
	}

	render () {
		return <form >
			<TextField id = {'description'} label = {'Description'} value = {this.props.value.description}
								 onChange = {this.props.onChange} />
			<button id = {'saveType'} type = {'submit'} onClick = {this.props.onClick} >Add</button >
		</form >
	}
}


