import React, {Component} from 'react'
import './App.css'
import logo               from './logo.svg'

class App extends Component {

	componentDidMount = async () => {
		let response   = await fetch("partyTypes/")
		let partyTypes = await response.json()
		console.log('partyTypes: ', partyTypes)
		this.setState(partyTypes)
	}

	render () {
		if (this.state && this.state._embedded) {
			console.log(this.state._embedded)
		}

		return (
			<div className="App" >
				<header className="App-header" >
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title" >Welcome to React</h1 >
				</header >
				<p className="App-intro" >
					To get started, edit <code >src/App.js</code > and save to reload.
				</p >
				<ul >
					{this.state && this.state._embedded ? this.state._embedded.partyTypes.map(p =>
																																											<li >{p.description}</li >) : ""}
				</ul >
			</div >
		)
	}
}

export default App
