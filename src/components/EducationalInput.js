import React, { useState } from 'react';
import uniqid from 'uniqid';

function EducationalInput (props) {
    const [state, setState] = useState({
        school: !props.educational.school ? '' : props.educational.school,
        study: !props.educational.study ? '' : props.educational.study,
        date: !props.educational.date ? '' : props.educational.date,
        id: !props.educational.id ? uniqid() : props.educational.id,
        key: 'educational'
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setState({
            ...state,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        props.handleNewInputSubmit(state, e);
        props.handleViewReset();
    }

    const handleDelete = (e) => {
        props.handleDeleteInput(state, e);
        props.handleViewReset();
    }

    return (
        <div className='c-form__content' data-id={state.id}>
            <div className='c-form__content__group'>
                <label htmlFor='school'>School Name:</label>
                <input type='text' id='school' name='school' data-key='educational' value={state.school} required onChange={handleChange} />
            </div>
            <div className='c-form__content__group'>
                <label htmlFor='study'>Title of Study:</label>
                <input type='text' id='study' name='study' data-key='educational' value={state.study} required onChange={handleChange} />
            </div>
            <div className='c-form__content__group'>
                <label htmlFor='date'>Date of Study:</label>
                <input type='date' id='date' name='date' data-key='educational' value={state.date} required onChange={handleChange} />
            </div>
            <button type='button' className='c-btn c-educational__btn' onClick={handleSubmit}>Submit / Edit</button>
            <button type='button' className='c-btn c-educational__btn' onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default EducationalInput;
