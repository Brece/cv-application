import React from 'react';
import uniqid from 'uniqid';

class EducationalInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            school: !this.props.educational.school ? '' : this.props.educational.school,
            study: !this.props.educational.study ? '' : this.props.educational.study,
            date: !this.props.educational.date ? '' : this.props.educational.date,
            id: !this.props.educational.id ? uniqid() : this.props.educational.id,
            key: 'educational'
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
            <div className='c-form__content' data-id={this.state.id}>
                <div className='c-form__content__group'>
                    <label htmlFor='school'>School Name:</label>
                    <input type='text' id='school' name='school' data-key='educational' value={this.state.school} required onChange={this.handleChange} />
                </div>
                <div className='c-form__content__group'>
                    <label htmlFor='study'>Title of Study:</label>
                    <input type='text' id='study' name='study' data-key='educational' value={this.state.study} required onChange={this.handleChange} />
                </div>
                <div className='c-form__content__group'>
                    <label htmlFor='date'>Date of Study:</label>
                    <input type='date' id='date' name='date' data-key='educational' value={this.state.date} required onChange={this.handleChange} />
                </div>
                <button type='button' className='c-btn c-educational__btn' onClick={this.handleSubmit}>Submit / Edit</button>
                <button type='button' className='c-btn c-educational__btn' onClick={this.handleDelete}>Delete</button>
            </div>
        )
    }
}

export default EducationalInput;
