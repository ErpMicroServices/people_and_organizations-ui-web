import {library}                                                          from '@fortawesome/fontawesome-svg-core'
import {fab}                                                              from '@fortawesome/free-brands-svg-icons'
import {faAngleDoubleLeft, faAngleDoubleRight, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'
import React, {Component}                                                 from 'react'
import {BrowserRouter as Router, Link, Route, Switch}                     from 'react-router-dom'
import './App.css'
import Index                                                              from './CaseRoleTypes'
import CaseStatusTypes                                                    from './CaseStatusTypes'
import CaseTypes                                                          from './CaseTypes'
import CommunicationEventPurposeTypes                                     from './CommunicationEventPurposeTypes'
import CommunicationEventRoleTypes                                        from './CommunicationEventRoleTypes'
import CommunicationEventTypes                                            from './CommunicationEventTypes'
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
								<Link to = "/partyTypes" >Party Types</Link >
							</li >
						</ul >
					</nav >
					<Switch >
						<Route path = "/caseRoleTypes" >
							<Index id = {'app'} />
						</Route >
						<Route path = "/caseStatusTypes" >
							<CaseStatusTypes id = {'app'} />
						</Route >
						<Route path = "/caseTypes" >
							<CaseTypes id = {'app'} />
						</Route >
						<Route path = "/communicationEventTypes" >
							<CommunicationEventTypes id = {'app'} />
						</Route >
						<Route path = "/communicationEventPurposeTypes" >
							<CommunicationEventPurposeTypes id = {'app'} />
						</Route >
						<Route path = "/communicationEventRoleTypes" >
							<CommunicationEventRoleTypes id = {'app'} />
						</Route >
						<Route path = "/partyTypes" >
							<PartyTypes id = {'app'} />
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
