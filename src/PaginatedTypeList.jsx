import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import PropTypes         from 'prop-types'
import React             from 'react'
import NumberField       from './NumberField'

export default class PaginatedList extends React.Component {

	static propTypes = {
		id                : PropTypes.string.isRequired,
		url               : PropTypes.string.isRequired,
		responseJsonToList: PropTypes.func.isRequired
	}

	static defaultProps = {}

	render () {
		const componentName = 'PaginatedListComponent'
		const id            = `${componentName}_${this.props.id}`
		return (
			<div id={id} className={componentName} >
				<div id={`${id}_controls`} >
					<button id={`${id}_beginning`} onClick={e => this.setState({page: 1})} >
						<FontAwesomeIcon icon={'angle-double-left'} />
					</button >
					<button id={`${id}_nex`} onClick={e => this.setState({page: this.state.page - 1})} >
						<FontAwesomeIcon icon={'angle-left'} />
					</button >

					<NumberField id={'page'} label={'Page'} value={this.state.page}
						onChange={e => this.setState({page: e.target.value})} />
					of {this.state.result_page.totalPages}
					<NumberField id={'size'} label={'Size'} value={this.state.size}
						onChange={e => this.setState({size: e.target.value, page: 1})} />
					<button id={`${id}_beginning`} onClick={e => this.setState({page: this.state.page + 1})} >
						<FontAwesomeIcon icon={'angle-right'} />
					</button >
					<button id={`${id}_beginning`} onClick={e => this.setState({page: this.state.result_page.totalPages})} >
						<FontAwesomeIcon icon={'angle-double-right'} />
					</button >
				</div >
				<div id={`${id}_data`} >
					<ul >
						{this.state.list.map((element, index) => <li key={index} ><a
							href={element._links.self.href} >{element.description}</a ></li >)}
					</ul >
				</div >
			</div >
		)
	}

	state             = {
		list       : [],
		result_page: {
			size         : 0,
			totalElements: 0,
			totalPages   : 0,
			number       : 0
		},
		page       : 1,
		size       : 20,
		sort       : 'description'
	}

	componentDidMount = async () => {
		await this.updateData()
	}

	componentDidUpdate = async (prevProps, prevState, snapshot) => {
		if ((this.state.page != prevState.page) || (this.state.size != prevState.size)) {
			await this.updateData()
		}
	}

	async updateData () {
		let response     = await fetch(`${this.props.url}?page=${this.state.page - 1}&size=${this.state.size}&sort=${this.state.sort}`)
		let responseJson = await response.json()
		this.setState({
										list       : this.props.responseJsonToList(responseJson),
										result_page: responseJson.page
									})
	}
}

