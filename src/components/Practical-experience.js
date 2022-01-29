import React, { useState } from 'react';
import uniqid from 'uniqid';
import PracticalInput from './PracticalInput';

function PracticalExperience (props) {
    const [view, setView] = useState(false);

    const handleToggleView = () => {
        setView(!view);
    }

    const handleViewReset = () => {
        setView(false);
    }

    const renderInputSections = () => {
        let inputSections =[];

        if (props.practical.length > 0) {
            inputSections = props.practical.map((item) => {
                return <PracticalInput handleNewInputSubmit={props.handleNewInputSubmit} handleDeleteInput={props.handleDeleteInput} practical={item} handleViewReset={handleViewReset} key={uniqid()} />;
            });
        } else {
            inputSections.push(<PracticalInput handleNewInputSubmit={props.handleNewInputSubmit} handleDeleteInput={props.handleDeleteInput} practical={props.practical} handleViewReset={handleViewReset} key={uniqid()} />);
        }

        return inputSections;
    }

    return (
        <section id='c-practical'>
            <h2 className='c-practical__title'>Practical Information</h2>
            {renderInputSections()}

            {view
            ? <PracticalInput handleNewInputSubmit={props.handleNewInputSubmit} handleDeleteInput={props.handleDeleteInput} practical={props.practical} handleViewReset={handleViewReset} key={uniqid()} />
            : ''}
            <button type='button' className='c-btn c-practical__addBtn' onClick={handleToggleView}>Add Experience</button>
        </section>
    );
}

/*
class PracticalExperience extends React.Component {
    constructor() {
        super();
        this.state = {
            view: false
        }
    }

    handleToggleView = () => {
        this.setState({ view: !this.state.view });
    }

    render() {
        let inputSections =[];

        if (this.props.practical.length > 0) {
            inputSections = this.props.practical.map((item) => {
                return <PracticalInput handleNewInputSubmit={this.props.handleNewInputSubmit} handleDeleteInput={this.props.handleDeleteInput} practical={item} key={uniqid()} />;
            });
        } else {
            inputSections.push(<PracticalInput handleNewInputSubmit={this.props.handleNewInputSubmit} handleDeleteInput={this.props.handleDeleteInput} practical={this.props.practical} key={uniqid()} />);
        }

        return (
            <section id='c-practical'>
                <h2 className='c-practical__title'>Practical Information</h2>
                {inputSections}

                {this.state.view
                ? <PracticalInput handleNewInputSubmit={this.props.handleNewInputSubmit} handleDeleteInput={this.props.handleDeleteInput} practical={this.props.practical} key={uniqid()} />
                : ''}
                <button type='button' className='c-btn c-practical__addBtn' onClick={this.handleToggleView}>Add Experience</button>
            </section>
        );
    }
}
*/

export default PracticalExperience;
