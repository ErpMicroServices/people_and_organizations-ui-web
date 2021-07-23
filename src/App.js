import {library}                                                          from '@fortawesome/fontawesome-svg-core'
import {fab}                                                              from '@fortawesome/free-brands-svg-icons'
import {faAngleDoubleLeft, faAngleDoubleRight, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'
import React, {Component}                                                 from 'react'
import {BrowserRouter as Router, Link, Route, Switch}                     from 'react-router-dom'
import './App.css'
import ErpTypeComponent                                                   from './ErpTypeComponent'
import Home                                                               from './Home'

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
								<Link to = "/" >Home</Link >
							</li >
							<li >
								<Link id = {'caseRoleTypes'} to = "/caseRoleTypes" >Case Role Types</Link >
							</li >
							<li >
								<Link id = {'caseStatusTypes'} to = "/caseStatusTypes" >Case Status Types</Link >
							</li >
							<li >
								<Link id = {'caseTypes'} to = "/caseTypes" >Case Types</Link >
							</li >
							<li >
								<Link id = {'communicationEventTypes'} to = "/communicationEventTypes" >Communication Event
																																												Types</Link >
							</li >
							<li >
								<Link id = {'communicationEventPurposeTypes'} to = "/communicationEventPurposeTypes" >Communication
																																																			Event Purpose
																																																			Types</Link >
							</li >
							<li >
								<Link id = {'communicationEventRoleTypes'} to = "/communicationEventRoleTypes" >Communication
																																																Event Role
																																																Types</Link >
							</li >
							<li >
								<Link id = {'communicationEventStatusTypes'} to = "/communicationEventStatusTypes" >Communication
																																																		Event Status
																																																		Types</Link >
							</li >
							<li >
								<Link id = {'contactMechanismTypes'} to = "/contactMechanismTypes" >Contact Mechanism Types</Link >
							</li >
							<li >
								<Link id = {'facilityTypes'} to = "/facilityTypes" >Facility Types</Link >
							</li >
							<li >
								<Link id = {'facilityRoleTypes'} to = "/facilityRoleTypes" >Facility Role Types</Link >
							</li >
							<li >
								<Link to = "/partyTypes" >Party Types</Link >
							</li >
						</ul >
					</nav >
					<Switch >
						<Route path = "/caseRoleTypes" >
							<ErpTypeComponent id = {'caseRoleTypes'} title = {'Case Role Types'} uri = {'/caseRoleTypes'} />
						</Route >
						<Route path = "/caseStatusTypes" >
							<ErpTypeComponent id = {'caseStatusTypes'} title = {'Case Status Types'} uri = {'/caseStatusTypes'} />
						</Route >
						<Route path = "/caseTypes" >
							<ErpTypeComponent id = {'caseTypes'} title = {'Case Types'} uri = {'/caseTypes'} />
						</Route >
						<Route path = "/communicationEventTypes" >
							<ErpTypeComponent id = {'communicationEventTypes'} title = {'Communication Event Types'}
																uri = {'/communicationEventTypes'} />
						</Route >
						<Route path = "/communicationEventPurposeTypes" >
							<ErpTypeComponent id = {'communicationEventPurposeTypes'} title = {'Communication Event Purpose Types'}
																uri = {'/communicationEventPurposeTypes'} />
						</Route >
						<Route path = "/communicationEventRoleTypes" >
							<ErpTypeComponent id = {'communicationEventRoleTypes'} title = {'Communication Event Role Types'}
																uri = {'/communicationEventRoleTypes'} />
						</Route >
						<Route path = "/communicationEventStatusTypes" >
							<ErpTypeComponent id = {'communicationEventStatusTypes'} title = {'Communication Event Status Types'}
																uri = {'/communicationEventStatusTypes'} />
						</Route >
						<Route path = "/contactMechanismTypes" >
							<ErpTypeComponent id = {'contactMechanismTypes'} title = {'Contact Mechanism Types'}
																uri = {'/contactMechanismTypes'} />
						</Route >
						<Route path = "/facilityTypes" >
							<ErpTypeComponent id = {'facilityTypes'} title = {'Facility Types'} uri = {'/facilityTypes'} />
						</Route >
						<Route path = "/facilityRoleTypes" >
							<ErpTypeComponent id = {'facilityRoleTypes'} title = {'Facility Role Types'}
																uri = {'/facilityRoleTypes'} />
						</Route >
						<Route path = "/partyTypes" >
							<ErpTypeComponent id = {'partyTypes'} title = {'Party Types'} uri = {'/partyTypes'} />
						</Route >
						<Route path = "/" >
							<Home id = {'app'} />
						</Route >
					</Switch >
				</div >
			</Router >

		)
	}

}

export default App
