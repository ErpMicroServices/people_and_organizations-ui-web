import PropTypes from 'prop-types'
import React     from 'react'

export default class index extends React.Component {

	static propTypes = {
		id: PropTypes.string.isRequired
	}

	static defaultProps = {}

	componentDidMount = async () => {
		let response   = await fetch("/people_and_organizations/api/partyTypes")
		let partyTypes = await response.json()
		this.setState({
										partyTypes: partyTypes._embedded.partyTypes,
										page      : partyTypes.page
									})
	}

	render () {
		const componentName = 'partyTypesComponent'
		const id            = `${componentName}_${this.props.id}`
		return (
			<div id={id} className={componentName} >
				<h1 >Party Types</h1 >
				<ul >
					{this.state.partyTypes.map((p, i) =>
																			 <li key={i} ><a href={p._links.self.href} >{p.description}</a ></li >)}
				</ul >
			</div >
		)
	}

	state = {
		partyTypes: [],
		"page"    : {
			"size"         : 0,
			"totalElements": 0,
			"totalPages"   : 0,
			"number"       : 0
		}
	}
}

