import React, {Component} from 'react'
import './App.css'
import logo               from './logo.svg'

class App extends Component {

	componentDidMount = async () => {
		let response   = await fetch("/people_and_organizations/api/partyTypes")
		let partyTypes = await response.json()
		this.setState({
										partyTypes: partyTypes._embedded.partyTypes,
										page      : partyTypes.page
									})
	}

	render () {
		return (
			<div className="App" >
				<header className="App-header" >
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title" >Welcome to React</h1 >
				</header >
				<p className="App-intro" >
					To get started, edit <code >src/App.js</code > and save to reload.
				</p >
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

export default App
