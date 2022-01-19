import React from "react";

class EducationalExperience extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <section className='c-educational'>
                <h2 className='c-educational__title'>Educational Information</h2>
                <div className='c-form__group'>
                    <label htmlFor='school'>School Name:</label>
                    <input type='text' id='school' />
                </div>
                <div className='c-form__group'>
                    <label htmlFor='study'>Title of Study:</label>
                    <input type='text' id='study' />
                </div>
                <div className='c-form__group'>
                    <label htmlFor='date'>Date of Study:</label>
                    <input type='date' id='date' />
                </div>
            </section>
        )
    }
}

export default EducationalExperience;