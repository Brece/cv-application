import React from 'react';
import uniqid from 'uniqid';

class PracticalInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            company: !this.props.practical.company ? '' : this.props.practical.company,
            title: !this.props.practical.title ? '' : this.props.practical.title,
            task: !this.props.practical.task ? '' : this.props.practical.task,
            from: !this.props.practical.from ? '' : this.props.practical.from,
            to: !this.props.practical.to ? '' : this.props.practical.to,
            id: !this.props.practical.id ? uniqid() : this.props.practical.id,
            key: 'practical'
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
                    <label htmlFor='company'>Company Name:</label>
                    <input type='text' id='company' name='company' data-key='practical' value={this.state.company} required onChange={this.handleChange} />
                </div>
                <div className='c-form__content__group'>
                    <label htmlFor='title'>Position Title:</label>
                    <input type='text' id='title' name='title' data-key='practical' value={this.state.title} required onChange={this.handleChange} />
                </div>
                <div className='c-form__content__group'>
                    <label htmlFor='task'>Main task of your job:</label>
                    <textarea id='task' name='task' data-key='practical' value={this.state.task} rows='4' cols='38' onChange={this.handleChange} />
                </div>
                <div className='c-form__content__group'>
                    <label htmlFor='from'>From:</label>
                    <input type='date' id='from' name='from' data-key='practical' value={this.state.from} required onChange={this.handleChange} />
                    <label htmlFor='to'>To:</label>
                    <input type='date' id='to' name='to' data-key='practical' value={this.state.to} required onChange={this.handleChange} />
                </div>
                <button type='button' className='c-btn c-practical__btn' onClick={this.handleSubmit}>Submit / Edit</button>
                <button type='button' className='c-btn c-practical__btn' onClick={this.handleDelete}>Delete</button>
            </div>
        )
    }
}

export default PracticalInput;
