import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import PropTypes         from 'prop-types'
import React             from 'react'

import './EditablePaginatedTypeList.css'
import NumberField       from './NumberField'

export default class PaginatedList extends React.Component {

	static propTypes = {
		id                : PropTypes.string.isRequired,
		url               : PropTypes.string.isRequired,
		responseJsonToList: PropTypes.func.isRequired
	}

	static defaultProps = {}

	renderButton = pageNumber => <button id={`$PaginatedListComponent_button_${pageNumber}`}
		onClick={e => this.setState({page: pageNumber})} >
		{pageNumber + 1}
	</button >

	render () {
		const componentName = 'PaginatedListComponent'
		const id            = `${componentName}_${this.props.id}`
		const foo           = this
		return <div id={id} className={componentName} >
			<div id={`${id}_controls`} >
				<button id={`${id}_beginning`} onClick={e => this.setState({page: 1})} >
					<FontAwesomeIcon icon={'angle-double-left'} />
				</button >
				<button id={`${id}_next`} onClick={e => this.setState({page: this.state.page - 1})} >
					<FontAwesomeIcon icon={'angle-left'} />
				</button >
				{[...Array(this.state.result_page.totalPages).keys()]
					.map(pageNumber => this.renderButton(pageNumber))}
				<button id={`${id}_beginning`} onClick={e => this.setState({page: this.state.page + 1})} >
					<FontAwesomeIcon icon={'angle-right'} />
				</button >
				<button id={`${id}_beginning`} onClick={e => this.setState({page: this.state.result_page.totalPages})} >
					<FontAwesomeIcon icon={'angle-double-right'} />
				</button >
			</div >
			<NumberField id={'size'} label={'Size'} value={this.state.size}
				onChange={e => this.setState({size: e.target.value, page: 1})} />
			<div id={`${id}_data`} >
				<ul >
					{this.state.list.map((element, index) => <li key={index} >
						{element.description}
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

