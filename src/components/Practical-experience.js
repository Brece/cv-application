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

export default PracticalExperience;
