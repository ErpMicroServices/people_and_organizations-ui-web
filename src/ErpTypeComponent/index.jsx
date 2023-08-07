import PropTypes from 'prop-types'
import React, {useEffect, useState} from 'react'
import {useForm} from "react-hook-form";


function ErpTypeCommponent(props) {
    const {id, componentName, title, typename, uri} = props;
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm();

    const [hateoas, setHateoas] = useState({
        _embedded: {
            caseRoleTypes: []
        }
    });

    useEffect(() => {
        fetch(uri, {
            headers: {
                'Accept': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => setHateoas(data))
            .catch(error => console.error(error));
    }, []);

    const onSubmit = async (data) => {
        console.log('data: ', data);
        await fetch(uri,
            {
                method: "post",
                body: JSON.stringify(data),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
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
                <ul>
                    {
                        hateoas._embedded[typename].map(type => (
                            <li id={type.id}>{type.description}</li>
                        ))
                    }
                </ul>
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
