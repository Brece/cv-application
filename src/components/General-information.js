import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';

function GeneralInformation (props) {
    const [state, setState] = useState(
        !props.general
		?	{
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
        handleStateReset();
    }

    const handleStateReset = () => {
        setState(
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
    }

    return (
        <section id='c-general'>
            <h2 className='c-general__title'>General Information</h2>
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
            </div>
            <button type='button' className='c-btn c-general__btn' onClick={handleSubmit}>Submit / Edit</button>
            <button type='button' className='c-btn c-general__btn' onClick={handleDelete}>Delete</button>
        </section>
    );
}

/*
class GeneralInformation extends React.Component {
    constructor(props) {
        super(props);
        this.state = !this.props.general
		?	{
			firstname: '',
            lastname: '',
            email: '',
            phone: '',
            info: '',
            id: uniqid(),
            key: 'general'
		}
		:   {
            firstname: this.props.general.firstname,
            lastname: this.props.general.lastname,
            email: this.props.general.email,
            phone: this.props.general.phone,
            info: this.props.general.info,
            id: this.props.general.id,
            key: 'general'
        }
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        this.props.handleNewInputSubmit(this.state, e);
    }

    handleDelete = (e) => {
        this.props.handleDeleteInput(this.state, e);
    }

    render() {
        return (
            <section id='c-general'>
                <h2 className='c-general__title'>General Information</h2>
                <div className="c-form__content">
                    <div className='c-form__content__group'>
                        <label htmlFor='firstname'>Firtsname:</label>
                        <input type='text' id='firstname' name='firstname' data-key='general' value={this.state.firstname} required onChange={this.handleChange} />
                    </div>
                    <div className='c-form__content__group'>
                        <label htmlFor='lastname'>Lastname:</label>
                        <input type='text' id='lastname' name='lastname' data-key='general' value={this.state.lastname} required onChange={this.handleChange} />
                    </div>
                    <div className='c-form__content__group'>
                        <label htmlFor='email'>E-Mail Address:</label>
                        <input type='email' id='email' name='email' data-key='general' placeholder='youremail@mail.com' value={this.state.email} required onChange={this.handleChange} />
                    </div>
                    <div className='c-form__content__group'>
                        <label htmlFor='phone'>Phone Number:</label>
                        <input type='tel' id='phone' name='phone' data-key='general' placeholder='01234456666' value={this.state.phone} onChange={this.handleChange} />
                    </div>
                    <div className='c-form__content__group'>
                        <label htmlFor='info'>About Me:</label>
                        <textarea id='info' name='info' data-key='general' value={this.state.info} rows='4' cols='38' required onChange={this.handleChange} />
                    </div>
                </div>
                <button type='button' className='c-btn c-general__btn' onClick={this.handleSubmit}>Submit / Edit</button>
                <button type='button' className='c-btn c-general__btn' onClick={this.handleDelete}>Delete</button>
            </section>
        );
    }
}
*/

export default GeneralInformation;
