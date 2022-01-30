import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';

function GeneralInformation (props) {
    const [state, setState] = useState(
        {
			firstname: '',
            lastname: '',
            email: '',
            phone: '',
            info: '',
            id: uniqid(),
            key: 'general'
		}
    );

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setState(
            {
                ...state,
                [name]: value
            }
        );
    }

    const handleSubmit = (e) => {
        props.handleNewInputSubmit(state, e);
    }

    const handleDelete = (e) => {
        props.handleDeleteInput(state, e);
    }

    useEffect(() => {
        setState( !props.general 
            ?   {
                    firstname: '',
                    lastname: '',
                    email: '',
                    phone: '',
                    info: '',
                    id: uniqid(),
                    key: 'general'
                }
            :   {
                    firstname: props.general.firstname,
                    lastname: props.general.lastname,
                    email: props.general.email,
                    phone: props.general.phone,
                    info: props.general.info,
                    id: props.general.id,
                    key: 'general'
                }
        );
    }, [props]);

    return (
        <section id='c-general'>
            <h2 className='c-general__title'>General Information</h2>
            <form onSubmit={handleSubmit} className='c-form'>
                <div className="c-form__content">
                    <div className='c-form__content__group'>
                        <label htmlFor='firstname'>Firtsname:</label>
                        <input type='text' id='firstname' name='firstname' data-key='general' value={state.firstname} required onChange={handleChange} />
                    </div>
                    <div className='c-form__content__group'>
                        <label htmlFor='lastname'>Lastname:</label>
                        <input type='text' id='lastname' name='lastname' data-key='general' value={state.lastname} required onChange={handleChange} />
                    </div>
                    <div className='c-form__content__group'>
                        <label htmlFor='email'>E-Mail Address:</label>
                        <input type='email' id='email' name='email' data-key='general' placeholder='youremail@mail.com' value={state.email} required onChange={handleChange} />
                    </div>
                    <div className='c-form__content__group'>
                        <label htmlFor='phone'>Phone Number:</label>
                        <input type='tel' id='phone' name='phone' data-key='general' placeholder='01234456666' value={state.phone} onChange={handleChange} />
                    </div>
                    <div className='c-form__content__group'>
                        <label htmlFor='info'>About Me:</label>
                        <textarea id='info' name='info' data-key='general' value={state.info} rows='4' cols='38' required onChange={handleChange} />
                    </div>
                    <button type='submit' className='c-btn c-general__btn'>Submit / Edit</button>
                    <button type='button' className='c-btn c-general__btn' onClick={handleDelete}>Delete</button>
                </div>
            </form>
        </section>
    );
}

export default GeneralInformation;
