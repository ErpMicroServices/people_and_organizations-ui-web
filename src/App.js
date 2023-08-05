import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {faAngleDoubleLeft, faAngleDoubleRight, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import './App.css'

library.add(fab, faAngleDoubleLeft, faAngleDoubleRight, faAngleLeft, faAngleRight);


export default function App() {
    return (
        <>
            <h1>People and Organizations</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link id={'caseRoleTypes'} to="/caseRoleTypes">Case Role Types</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>

    );
}
