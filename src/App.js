import React from 'react';
import GeneralInformation from './components/General-information';
import EducationalExperience from './components/Educational-experience';
import PracticalExperience from './components/Practical-experience';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			general: {},
			educational: {},
			practical: {}
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();

	}

	handleStateChange = (e) => {
		const name = e.target.name;
        const value = e.target.value;
		const key = e.target.dataset.key;
		
        this.setState({ [key]: {...this.state[key], [name]: value } });
	}

	render() {
		// TODO: fix form structure and basic styling
		return (
		<div className="o-wrap App">
			<form onSubmit={this.handleSubmit} className='c-form'>
				<GeneralInformation handleStateChange={this.handleStateChange} />
				<EducationalExperience handleStateChange={this.handleStateChange} />
				<PracticalExperience handleStateChange={this.handleStateChange} />
				<div className='c-form__group'>
					<button type='submit' className='c-form__group__btn'>Submit</button>
					<button type='button' className='c-form__group__btn'>Edit</button>
				</div>
			</form>
		</div>
		);
	}
}

export default App;
