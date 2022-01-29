import React, { useState } from 'react';
import uniqid from 'uniqid';

function PracticalInput (props) {
    const [state, setState] = useState({
        company: !props.practical.company ? '' : props.practical.company,
        title: !props.practical.title ? '' : props.practical.title,
        task: !props.practical.task ? '' : props.practical.task,
        from: !props.practical.from ? '' : props.practical.from,
        to: !props.practical.to ? '' : props.practical.to,
        id: !props.practical.id ? uniqid() : props.practical.id,
        key: 'practical'
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setState({
            ...state,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        props.handleNewInputSubmit(state, e);
        props.handleViewReset();
    }

    const handleDelete = (e) => {
        props.handleDeleteInput(state, e);
        props.handleViewReset();
    }

    return (
        <div className='c-form__content' data-id={state.id}>
            <div className='c-form__content__group'>
                <label htmlFor='company'>Company Name:</label>
                <input type='text' id='company' name='company' data-key='practical' value={state.company} required onChange={handleChange} />
            </div>
            <div className='c-form__content__group'>
                <label htmlFor='title'>Position Title:</label>
                <input type='text' id='title' name='title' data-key='practical' value={state.title} required onChange={handleChange} />
            </div>
            <div className='c-form__content__group'>
                <label htmlFor='task'>Main task of your job:</label>
                <textarea id='task' name='task' data-key='practical' value={state.task} rows='4' cols='38' onChange={handleChange} />
            </div>
            <div className='c-form__content__group'>
                <label htmlFor='from'>From:</label>
                <input type='date' id='from' name='from' data-key='practical' value={state.from} required onChange={handleChange} />
                <label htmlFor='to'>To:</label>
                <input type='date' id='to' name='to' data-key='practical' value={state.to} required onChange={handleChange} />
            </div>
            <button type='button' className='c-btn c-practical__btn' onClick={handleSubmit}>Submit / Edit</button>
            <button type='button' className='c-btn c-practical__btn' onClick={handleDelete}>Delete</button>
        </div>
    );
}

/*
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
*/

export default PracticalInput;
