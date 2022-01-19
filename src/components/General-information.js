import React from 'react';

class GeneralInformation extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <section className='c-general'>
                <h2 className='c-general__title'>General Information</h2>
                <div className='c-form__group'>
                    <label htmlFor='firstname'>Firtsname:</label>
                    <input type='text' id='firstname' />
                </div>
                <div className='c-form__group'>
                    <label htmlFor='lastname'>Lastname:</label>
                    <input type='text' id='lastname' />
                </div>
                <div className='c-form__group'>
                    <label htmlFor='email'>E-Mail Address:</label>
                    <input type='email' id='email' placeholder='youremail@mail.com' />
                </div>
                <div className='c-form__group'>
                    <label htmlFor='phone'>Phone Number:</label>
                    <input type='tel' id='phone' placeholder='01234456666' />
                </div>
            </section>
        )
    }
}

export default GeneralInformation;
