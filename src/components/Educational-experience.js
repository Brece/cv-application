import React from "react";
import uniqid from 'uniqid';

class EducationalExperience extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }
    handleChange = (e) => {
        this.props.handleStateChange(e);
    }

    newSection = () => {
        return (
            <div className='c-form__content' key={uniqid()}>
                <div className='c-form__content__group'>
                    <label htmlFor='school'>School Name:</label>
                    <input type='text' id='school' name='school' data-key='educational' required onChange={this.handleChange} />
                </div>
                <div className='c-form__content__group'>
                    <label htmlFor='study'>Title of Study:</label>
                    <input type='text' id='study' name='study' data-key='educational' required onChange={this.handleChange} />
                </div>
                <div className='c-form__content__group'>
                    <label htmlFor='date'>Date of Study:</label>
                    <input type='date' id='date' name='date' data-key='educational' required onChange={this.handleChange} />
                </div>
                <button type='button' className='c-btn c-practical__btn' onClick={this.handleCounter()}>Delete</button>
            </div>
        )
    }

    // TODO: increase and decrease counter and delete section
    handleCounter = () => {
        this.setState({ counter: this.state.counter + 1 }, 
            () => this.renderSection());
    }

    renderSection = () => {
        let sections = [];
        for (let i = 0; i < this.state.counter; i++) {
            sections.push(this.newSection());
        }
        return sections;
    }

    render() {
        return (
            <section id='c-educational'>
                <h2 className='c-educational__title'>Educational Information</h2>
                <div className="c-form__content">
                    <div className='c-form__content__group'>
                        <label htmlFor='school'>School Name:</label>
                        <input type='text' id='school' name='school' data-key='educational' required onChange={this.handleChange} />
                    </div>
                    <div className='c-form__content__group'>
                        <label htmlFor='study'>Title of Study:</label>
                        <input type='text' id='study' name='study' data-key='educational' required onChange={this.handleChange} />
                    </div>
                    <div className='c-form__content__group'>
                        <label htmlFor='date'>Date of Study:</label>
                        <input type='date' id='date' name='date' data-key='educational' required onChange={this.handleChange} />
                    </div>
                </div>
                {this.renderSection()}
                <button type='button' className='c-btn c-practical__btn' onClick={this.handleCounter}>Add Additional Experience</button>
            </section>
        );
    }
}

export default EducationalExperience;