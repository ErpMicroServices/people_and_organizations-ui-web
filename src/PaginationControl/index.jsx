import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import PropTypes         from 'prop-types'
import React             from 'react'
import NumberField       from '../fields/NumberField'

export default class index extends React.Component {

	static propTypes = {
		id                : PropTypes.string.isRequired,
		page              : PropTypes.number.isRequired,
		size              : PropTypes.number.isRequired,
		result_page       : PropTypes.shape({
																					size         : PropTypes.number.isRequired,
																					totalElements: PropTypes.number.isRequired,
																					totalPages   : PropTypes.number.isRequired,
																					number       : PropTypes.number.isRequired
																				}).isRequired,
		onPageNumberChange: PropTypes.func.isRequired,
		onPageSizeChange  : PropTypes.func.isRequired
	}

	static defaultProps = {
		result_page: {
			size         : 0,
			totalElements: 0,
			totalPages   : 0,
			number       : 0
		},
		page       : 1,
		size       : 20,
	}

	renderButton = pageNumber => <button id={`$PaginatedListComponent_button_${pageNumber}`}
		onClick={() => this.setState({page: pageNumber})} >
		{pageNumber + 1}
	</button >

	render () {
		const componentName = 'PaginationControlComponent'
		const id            = `${componentName}_${this.props.id}`
		return (
			<div id={id} className={componentName} >
				<button id={`${id}_beginning`} onClick={() => this.props.onPageNumberChange(1)} >
					<FontAwesomeIcon icon={'angle-double-left'} />
				</button >
				<button id={`${id}_next`} onClick={() => this.props.onPageNumberChange(this.props.page - 1)} >
					<FontAwesomeIcon icon={'angle-left'} />
				</button >
				{[...Array(this.props.result_page.totalPages).keys()]
					.map(pageNumber => this.renderButton(pageNumber))}
				<button id={`${id}_beginning`} onClick={() => this.props.onPageNumberChange(this.props.page + 1)} >
					<FontAwesomeIcon icon={'angle-right'} />
				</button >
				<button id={`${id}_beginning`}
					onClick={() => this.props.onPageNumberChange(this.props.result_page.totalPages)} >
					<FontAwesomeIcon icon={'angle-double-right'} />
				</button >
				<NumberField id={'size'} label={'Size'} value={this.props.size}
					onChange={e => this.props.onPageSizeChange(e.target.value)} />
			</div >
		)
	}

	state = {}
}

