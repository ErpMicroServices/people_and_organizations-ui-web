import PropTypes from 'prop-types'
import React from 'react'
import {useLoaderData} from "react-router-dom";
import {useForm} from "react-hook-form";


function ErpTypeCommponent(props) {
    const {id, componentName, title, typename, uri} = props;
    const {_embedded, _links, page} = useLoaderData();
    const types = _embedded[typename];
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm();

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
            types.length ? (
                <ul>
                    {
                        types.map(type => (
                            <li>{type.description}</li>
                        ))
                    }
                </ul>
            ) : <p>There are no types</p>
        }
    </div>
}

ErpTypeCommponent.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    uri: PropTypes.string.isRequired
};

export default ErpTypeCommponent
