import React from 'react';
import uniqid from 'uniqid';
import EducationalInput from './EducationalInput';

class EducationalExperience extends React.Component {
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
        let inputSections = [];

        if (this.props.educational.length > 0) {
            inputSections = this.props.educational.map((item) => {
                return <EducationalInput handleNewInputSubmit={this.props.handleNewInputSubmit} handleDeleteInput={this.props.handleDeleteInput} educational={item} key={uniqid()} />;
            });
        } else {
            inputSections.push(<EducationalInput handleNewInputSubmit={this.props.handleNewInputSubmit} handleDeleteInput={this.props.handleDeleteInput} educational={this.props.educational} key={uniqid()} />);
        }

        return (
            <section id='c-educational'>
                <h2 className='c-educational__title'>Educational Information</h2>
                {inputSections}

                {this.state.view
                ? <EducationalInput handleNewInputSubmit={this.props.handleNewInputSubmit} handleDeleteInput={this.props.handleDeleteInput} educational={this.props.educational} key={uniqid()} />
                : ''}
                <button type='button' className='c-btn c-educational__btn' onClick={this.handleToggleView}>Add Experience</button>
            </section>
        );
    }
}

export default EducationalExperience;