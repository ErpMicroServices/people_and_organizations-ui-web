import React, {Component}                             from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom"
import './App.css'
import Home                                           from './Home'
import PartyTypes                                     from './PartyTypes'


class App extends Component {


	render () {
		return (
			<Router >
				<div >
					<h1 >People and Organizations</h1 >
					<nav >
						<ul >
							<li >
								<Link to="/" >Home</Link >
							</li >
							<li >
								<Link to="/partyTypes" >Party Types</Link >
							</li >
						</ul >
					</nav >


					{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
					<Switch >
						<Route path="/partyTypes" >
							<PartyTypes />
						</Route >
						<Route path="/" >
							<Home />
						</Route >
					</Switch >
				</div >
			</Router >

		)
	}

}

export default App
