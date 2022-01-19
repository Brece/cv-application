import React from 'react';
import GeneralInformation from './components/General-information';
import EducationalExperience from './components/Educational-experience';
import PracticalExperience from './components/Practical-experience';

class App extends React.Component {
constructor() {
	super();
	this.state = {}
}

handleSubmit = (e) => {
	e.preventDefault();
}

render() {
	// TODO: fix form structure and basic styling
	return (
	<div className="o-wrap App">
		<form onSubmit={this.handleSubmit} className='c-form'>
			<GeneralInformation handleSubmit={this.handleSubmit} />
			<EducationalExperience handleSubmit={this.handleSubmit} />
			<PracticalExperience handleSubmit={this.handleSubmit} />
			<div className='c-form__group'>
				<button type='submit' className='c-form__group__btn'>Add</button>
				<button type='button' className='c-form__group__btn'>Edit</button>
			</div>
		</form>
	</div>
	);
}
}

export default App;
