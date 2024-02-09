import PropTypes from 'prop-types'
import React, {useEffect, useState} from 'react'
import {useForm} from "react-hook-form";


function emptyHateaosRecord(typename) {
    let emptyHateoasResponse = {_embedded: {}};
    emptyHateoasResponse._embedded[typename] = [];
    return emptyHateoasResponse;
}

function getUri(uri) {
    return fetch(uri, {
        headers: {
            'Accept': 'application/hal+json',
        }
    })
        .then(response => response.json());
}

async function deleteUri(type) {
    await fetch(type._links.self.href,
        {
            method: 'DELETE',
            headers: {
                'Accept': 'application/hal+json',
                'Content-Type': 'application/hal+json'
            },
            body: null
        }
    );
}

function ErpTypeCommponent(props) {
    const {id, componentName, title, typename, uri} = props;
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm();

    const [hateoas, setHateoas] = useState(emptyHateaosRecord(typename));

    useEffect(() => {
        getUri(uri)
            .then(data => setHateoas(data))
            .catch(error => console.error(error));
    }, []);

    const onDeleteButtonClick = async (type, e) => {
        e.preventDefault();
        await deleteUri(type);
    }
    const onSubmit = async (data) => {
        await fetch(uri,
            {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Accept': 'application/hal+json',
                    'Content-Type': 'application/hal+json'
                }
            })
            .then(response => response.json())
            .then(data => {
                hateoas._embedded[typename].push(data);
                setHateoas(hateoas);
                reset();
            })
    };

    return <div id={id} className={componentName}>
        <h1>{title}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor={'description'}>Description</label>
            <input type={'text'} {...register("description", {required: true})}/>
            <button type="submit">Add</button>
        </form>
        {
            hateoas._embedded[typename].length ? (
                <table>
                    <tbody>
                    {
                        hateoas._embedded[typename].map((type, index) => (
                            <tr key={index}>
                                <td>
                                    <button type={"button"}
                                            onClick={(e) => onDeleteButtonClick(type, e)}>Delete
                                    </button>
                                </td>
                                <td id={type.id} key={type.description}>{type.description}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            ) : <p>There are no types</p>
        }
    </div>
}

ErpTypeCommponent.propTypes = {
    componentName: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    uri: PropTypes.string.isRequired,
    typename: PropTypes.string.isRequired
};

export default ErpTypeCommponent
