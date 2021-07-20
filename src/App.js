import {library}                                                          from '@fortawesome/fontawesome-svg-core'
import {fab}                                                              from '@fortawesome/free-brands-svg-icons'
import {faAngleDoubleLeft, faAngleDoubleRight, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'
import React, {Component}                                                 from 'react'
import {BrowserRouter as Router, Link, Route, Switch}                     from "react-router-dom"
import './App.css'
import Index                                                              from './CaseRoleTypes'
import Home                                                               from './Home'
import PartyTypes                                                         from './PartyTypes'

library.add(fab, faAngleDoubleLeft, faAngleDoubleRight, faAngleLeft, faAngleRight)

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
								<Link to="/caseRoleTypes" >Case Role Types</Link >
							</li >
							<li >
								<Link to="/partyTypes" >Party Types</Link >
							</li >
						</ul >
					</nav >
					<Switch >
						<Route path = "/caseRoleTypes" >
							<Index id = {'app'} />
						</Route >
						<Route path = "/partyTypes" >
							<PartyTypes id = {'app'} />
						</Route >
						<Route path="/" >
							<Home id={'app'} />
						</Route >
					</Switch >
				</div >
			</Router >

		)
	}

}

export default App
