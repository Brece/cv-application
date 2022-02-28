import React, { useState } from 'react';
import uniqid from 'uniqid';

function PracticalInput (props) {
    const [state, setState] = useState({
        company: !props.practical.company ? '' : props.practical.company,
        title: !props.practical.title ? '' : props.practical.title,
        task: !props.practical.task ? '' : props.practical.task,
        from: !props.practical.from ? '' : props.practical.from,
        to: !props.practical.to ? '' : props.practical.to,
        id: !props.practical.id ? uniqid() : props.practical.id,
        key: 'practical'
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

    const handleValidDate = (e) => {
        if (state.from !== '' && state.to !== '') {
            const errorMessage = e.target.parentElement.parentElement.lastChild;
            if (state.from < state.to) {
                errorMessage.classList.remove('is-invalid');
                return;
            }
            errorMessage.classList.add('is-invalid');
        }
    }

    return (
        <form onSubmit={handleSubmit} className='c-form'>
            <div className='c-form__content' data-id={state.id}>
                <div className='c-form__content__group'>
                    <label htmlFor='company'>Company Name:</label>
                    <input type='text' id='company' name='company' data-key='practical' value={state.company} required onChange={handleChange} />
                </div>
                <div className='c-form__content__group'>
                    <label htmlFor='title'>Position Title:</label>
                    <input type='text' id='title' name='title' data-key='practical' value={state.title} required onChange={handleChange} />
                </div>
                <div className='c-form__content__group'>
                    <label htmlFor='task'>Main task of your job:</label>
                    <textarea id='task' name='task' data-key='practical' value={state.task} rows='4' cols='38' onChange={handleChange} />
                </div>
                <div className='c-form__content__group c-form__content__group--range'>
                    <div className='c-form__content__group__date'>
                        <label htmlFor='from'>From:</label>
                        <input type='date' id='from' name='from' data-key='practical' value={state.from} required onChange={(e) => { handleChange(e); handleValidDate(e); }} />
                    </div>
                    <div className='c-form__content__group__date'>
                        <label htmlFor='to'>To:</label>
                        <input type='date' id='to' name='to' data-key='practical' value={state.to} required onChange={(e) => { handleChange(e); handleValidDate(e); }} />
                    </div>
                    <small className='c-form__content__group__error'>Invalid start or end date.</small>
                </div>
                <button type='submit' className='c-btn c-practical__btn'>Submit / Edit</button>
                <button type='button' className='c-btn c-practical__btn' onClick={handleDelete}>Delete</button>
            </div>
        </form>
    );
}

export default PracticalInput;
