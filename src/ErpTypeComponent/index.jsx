import PropTypes from 'prop-types'
import React from 'react'
import {useLoaderData} from "react-router-dom";


function ErpTypeCommponent(props) {
    const {id, componentName, title} = props;
    const {_embedded, _links, page} = useLoaderData();
    const types = _embedded['caseRoleTypes'];
    return <div id={id} className={componentName}>
        <h1>{title}</h1>
        {types.length ? (
            <ul>
                {
                    types.map(type => (
                        <li>{type.description}</li>
                    ))
                }
            </ul>
        ) : <p>There are no types</p>}

    </div>
}

ErpTypeCommponent.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    uri: PropTypes.string.isRequired
};

export default ErpTypeCommponent
