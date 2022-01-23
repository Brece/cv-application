import React from 'react';
import uniqid from 'uniqid';

class GeneralInformation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: !this.props.general.firstname ? '' : this.props.general.firstname,
            lastname: !this.props.general.lastname ? '' : this.props.general.lastname,
            email: !this.props.general.email ? '' : this.props.general.email,
            phone: !this.props.general.phone ? '' : this.props.general.phone,
            info: !this.props.general.info ? '' : this.props.general.info,
            id: !this.props.general.id ? uniqid() : this.props.general.id,
            key: 'general'
        }
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value })
        console.log(this.props.general);
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
                        <label htmlFor='info'>Phone Number:</label>
                        <textarea id='info' name='info' data-key='general' value={this.state.info} rows='4' cols='40' required onChange={this.handleChange} />
                    </div>
                </div>
                <button type='button' className='c-btn c-general__btn' onClick={this.handleSubmit}>Submit / Edit</button>
                <button type='button' className='c-btn c-general__btn' onClick={this.handleDelete}>Delete</button>
            </section>
        );
    }
}

export default GeneralInformation;
