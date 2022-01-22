import React from "react";

class PracticalExperience extends React.Component {
    handleChange = (e) => {
        this.props.handleStateChange(e);
    }

    // TODO: option for more than one section, determine place to render
    renderInputSection = () => {
        return (
            <div className="c-form__content">
                <div className='c-form__content__group'>
                    <label htmlFor='company'>Company Name:</label>
                    <input type='text' id='company' name='company' data-key='practical' required onChange={this.handleChange} />
                </div>
                <div className='c-form__content__group'>
                    <label htmlFor='title'>Position Title:</label>
                    <input type='text' id='title' name='title' data-key='practical'  required onChange={this.handleChange} />
                </div>
                <div className='c-form__content__group'>
                    <label htmlFor='task'>Main task of your job:</label>
                    <textarea type='email' id='task' name='task' data-key='practical'  rows='4' cols='40' onChange={this.handleChange} />
                </div>
                <div className='c-form__content__group'>
                    <label htmlFor='from'>From:</label>
                    <input type='date' id='from' name='from' data-key='practical'  required onChange={this.handleChange} />
                    <label htmlFor='to'>To:</label>
                    <input type='date' id='to' name='to' data-key='practical'  required onChange={this.handleChange} />
                </div>
                <button type='button' className='c-btn c-practical__btn'>Delete</button>
            </div>
        )
    }

    render() {
            // TODO: duration 'from - to'
        return (
            <section id='c-practical'>
                <h2 className='c-practical__title'>Practical Information</h2>
                <div className="c-form__content">
                    <div className='c-form__content__group'>
                        <label htmlFor='company'>Company Name:</label>
                        <input type='text' id='company' name='company' data-key='practical'  required onChange={this.handleChange} />
                    </div>
                    <div className='c-form__content__group'>
                        <label htmlFor='title'>Position Title:</label>
                        <input type='text' id='title' name='title' data-key='practical'  required onChange={this.handleChange} />
                    </div>
                    <div className='c-form__content__group'>
                        <label htmlFor='task'>Main task of your job:</label>
                        <textarea type='email' id='task' name='task' data-key='practical'  rows='4' cols='40' onChange={this.handleChange} />
                    </div>
                    <div className='c-form__content__group'>
                        <label htmlFor='from'>From:</label>
                        <input type='date' id='from' name='from' data-key='practical'  required onChange={this.handleChange} />
                        <label htmlFor='to'>To:</label>
                        <input type='date' id='to' name='to' data-key='practical'  required onChange={this.handleChange} />
                    </div>
                </div>
                <button type='button' className='c-btn c-practical__btn' onClick={this.renderInputSection}>Add Additional Experience</button>
            </section>
        );
    }
}

export default PracticalExperience;