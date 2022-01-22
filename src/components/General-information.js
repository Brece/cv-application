import React from 'react';

class GeneralInformation extends React.Component {
    handleChange = (e) => {
        this.props.handleStateChange(e);
    }

    render() {
        return (
            <section id='c-general'>
                <h2 className='c-general__title'>General Information</h2>
                <div className="c-form__content">
                    <div className='c-form__content__group'>
                        <label htmlFor='firstname'>Firtsname:</label>
                        <input type='text' id='firstname' name='firstname' data-key='general' required onChange={this.handleChange} />
                    </div>
                    <div className='c-form__content__group'>
                        <label htmlFor='lastname'>Lastname:</label>
                        <input type='text' id='lastname' name='lastname' data-key='general' required onChange={this.handleChange} />
                    </div>
                    <div className='c-form__content__group'>
                        <label htmlFor='email'>E-Mail Address:</label>
                        <input type='email' id='email' name='email' data-key='general' placeholder='youremail@mail.com' required onChange={this.handleChange} />
                    </div>
                    <div className='c-form__content__group'>
                        <label htmlFor='phone'>Phone Number:</label>
                        <input type='tel' id='phone' name='phone' data-key='general' placeholder='01234456666' onChange={this.handleChange} />
                    </div>
                </div>
            </section>
        );
    }
}

export default GeneralInformation;
