import React, { useState } from 'react';
import uniqid from 'uniqid';
import EducationalInput from './EducationalInput';

function EducationalExperience (props) {
    const [view, setView] = useState(false);

    const handleToggleView = () => {
        setView(!view);
    }

    const handleViewReset = () => {
        setView(false);
    }

    const renderInputSections = () => {
        let inputSections = [];

        if (props.educational.length > 0) {
            inputSections = props.educational.map((item) => {
                return <EducationalInput handleNewInputSubmit={props.handleNewInputSubmit} handleDeleteInput={props.handleDeleteInput} educational={item} handleViewReset={handleViewReset} key={uniqid()} />;
            });
        } else {
            inputSections.push(<EducationalInput handleNewInputSubmit={props.handleNewInputSubmit} handleDeleteInput={props.handleDeleteInput} educational={props.educational} handleViewReset={handleViewReset} key={uniqid()} />);
        }

        return inputSections;
    }

    return (
        <section id='c-educational'>
            <h2 className='c-educational__title'>Educational Information</h2>
            {renderInputSections()}

            {view
            ? <EducationalInput handleNewInputSubmit={props.handleNewInputSubmit} handleDeleteInput={props.handleDeleteInput} educational={props.educational} handleViewReset={handleViewReset} key={uniqid()} />
            : ''}
            <button type='button' className='c-btn c-educational__addBtn' onClick={handleToggleView}>Add Experience</button>
        </section>
    );
}

export default EducationalExperience;
