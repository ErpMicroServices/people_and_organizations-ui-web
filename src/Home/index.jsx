import PropTypes from 'prop-types'
import React     from 'react'

export default class index extends React.Component {

	static propTypes = {
		id: PropTypes.string.isRequired
	}

	static defaultProps = {}

	render () {
		const componentName = 'homeComponent'
		const id            = `${componentName}_${this.props.id}`
		return (
			<div id={id} className={componentName} >

			</div >
		)
	}
}

