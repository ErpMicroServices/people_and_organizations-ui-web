import PropTypes         from 'prop-types'
import React             from 'react'
import PaginationControl from '../../PaginationControl'

import './index.css'

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
		return <div id = {id} className = {componentName} >
			<PaginationControl id = {id} result_page = {this.state.result_page} page = {this.state.page}
												 size = {this.state.size}
												 onPageNumberChange = {pageNumber => this.setState({page: pageNumber})}
												 onPageSizeChange = {pageSize => this.setState({size: pageSize, page: 1})} />

			<div id = {`${id}_data`} >
				<ul >
					{this.state.list.map((element, index) => <li key = {index} >
						{element.description}
						{element.aparent ? <PaginatedList id = {element.description} url = {element._links.children.href}
																							responseJsonToList = {this.props.responseJsonToList} /> : ""}
					</li >)}
				</ul >
			</div >
		</div >
	}

	state = {
		list       : [],
		result_page: {
			size         : 0,
			totalElements: 0,
			totalPages   : 0,
			number       : 0
		},
		params     : {
			page: 1,
			size: 20,
			sort: 'description'
		}
	}

	componentDidMount = async () => {
		await this.updateData()
	}

	componentDidUpdate = async (prevProps, prevState) => {
		if ((this.state.page !== prevState.page) || (this.state.size !== prevState.size)) {
			await this.updateData()
		}
	}

	async updateData () {
		let response     = await fetch(`${this.props.url}?page=${this.state.params.page - 1}&size=${this.state.params.size}&sort=${this.state.params.sort}`)
		let responseJson = await response.json()
		this.setState({
										list       : this.props.responseJsonToList(responseJson),
										result_page: responseJson.page
									})
	}
}

