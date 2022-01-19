import React from "react";

class PracticalExperience extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <section className='c-practical'>
                <h2 className='c-practical__title'>Practical Information</h2>
                <div className='c-form__group'>
                    <label htmlFor='company'>Company Name:</label>
                    <input type='text' id='company' />
                </div>
                <div className='c-form__group'>
                    <label htmlFor='title'>Position Title:</label>
                    <input type='text' id='title' />
                </div>
                <div className='c-form__group'>
                    <label htmlFor='task'>Main task of your job:</label>
                    <textarea type='email' id='task' rows='4' cols='40' />
                </div>
                <div className='c-form__group'>
                    <label htmlFor='phone'>Phone Number:</label>
                    <input type='tel' id='phone' placeholder='01234456666' />
                </div>
            </section>
        )
    }
}

export default PracticalExperience;