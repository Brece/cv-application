import React, { useEffect, useState } from 'react';
import GeneralInformation from './components/General-information';
import EducationalExperience from './components/Educational-experience';
import PracticalExperience from './components/Practical-experience';
import FormView from './components/FormView';

function App() {
	const [state, setState] = useState(
		JSON.parse(localStorage.getItem('form'))
		?	{
			general: JSON.parse(localStorage.getItem('form')).general,
			educational: JSON.parse(localStorage.getItem('form')).educational,
			practical: JSON.parse(localStorage.getItem('form')).practical
		}
		:	{
			general: [],
			educational: [],
			practical: []
		}
	);

	const handleNewInputSubmit = (inputState, e) => {
		e.preventDefault();
		const key = inputState.key;
		const id = inputState.id;
		let newState;

		// check for re-submit of existing input section
		const editedInput = state[key].find((item) => item.id === id);
		
		if (editedInput !== undefined) {
			newState = state[key].map((item) => {
				if (item.id === id) {
					return inputState;
				}
				return item;
			});
			setState(
				{
					...state,
					[key] : newState
				}
			);
		} else {
			setState(
				{
					...state,
					[key]: [...state[key], inputState]
				}
			);
		}
	}

	const handleDeleteInput = (inputState, e) => {
		e.preventDefault();
		const key = inputState.key;
		const id = inputState.id;
		const newState = state[key].filter((item) => item.id !== id);

		setState(
			{
				...state,
				[key]: newState
			}
		);
	}

	const updateLocalStorage = (e = false) => {
		const element = e;

		if (element !== false) {
			e.preventDefault();
		}

		localStorage.setItem('form', JSON.stringify(state));
	}

	const clearLocalStorage = () => {
		localStorage.clear();
		setState(
			{
			general: [],
			educational: [],
			practical: []
			}
		);
	}

	useEffect(() => {
		updateLocalStorage();
	});

	return (
		<div className="c-app">
			<form onSubmit={updateLocalStorage} className='c-form'>
				<GeneralInformation handleNewInputSubmit={handleNewInputSubmit} handleDeleteInput={handleDeleteInput} general={state.general[0]} />
				<EducationalExperience handleNewInputSubmit={handleNewInputSubmit} handleDeleteInput={handleDeleteInput} educational={state.educational} />
				<PracticalExperience handleNewInputSubmit={handleNewInputSubmit} handleDeleteInput={handleDeleteInput} practical={state.practical} />
				<div className='c-form__group'>
					<button type='submit' className='c-btn c-form__group__submitBtn'>Submit</button>
					<button type='button' className='c-btn c-form__group__clearBtn' onClick={clearLocalStorage}>Clear Form</button>
				</div>
			</form>
			<FormView state={state} />
		</div>
		);
} 

/*
class App extends React.Component {
	constructor() {
		super();
		this.state = JSON.parse(localStorage.getItem('form'))
		?	{
			general: JSON.parse(localStorage.getItem('form')).general,
			educational: JSON.parse(localStorage.getItem('form')).educational,
			practical: JSON.parse(localStorage.getItem('form')).practical
		}
		:	{
			general: [],
			educational: [],
			practical: []
		}
	}

	handleNewInputSubmit = (state, e) => {
		e.preventDefault();
		const key = state.key;
		const id = state.id;
		let newState;

		// check for re-submit of existing input section
		const editedInput = this.state[key].find((item) => item.id === id);
		
		if (editedInput !== undefined) {
			newState = this.state[key].map((item) => {
				if (item.id === id) {
					return state;
				}
				return item;
			});
			this.setState({ [key] : newState },
				() => this.updateLocalStorage());
		} else {
			this.setState({ [key]: [...this.state[key], state] },
				() => this.updateLocalStorage());
		}
	}

	handleDeleteInput = (state, e) => {
		e.preventDefault();
		const key = state.key;
		const id = state.id;
		const newState = this.state[key].filter((item) => item.id !== id);

		this.setState({ [key]: newState },
			() => this.updateLocalStorage());
	}

	updateLocalStorage = (e) => {
		const element = e || false;

		if (element !== false) {
			e.preventDefault();
		}

		localStorage.setItem('form', JSON.stringify(this.state));
	}

	clearLocalStorage = () => {
		localStorage.clear();
		this.setState(
			{
			general: [],
			educational: [],
			practical: []
			}
		);
	}

	render() {
		return (
		<div className="c-app">
			<form onSubmit={this.updateLocalStorage} className='c-form'>
				<GeneralInformation handleNewInputSubmit={this.handleNewInputSubmit} handleDeleteInput={this.handleDeleteInput} general={this.state.general[0]} />
				<EducationalExperience handleNewInputSubmit={this.handleNewInputSubmit} handleDeleteInput={this.handleDeleteInput} educational={this.state.educational} />
				<PracticalExperience handleNewInputSubmit={this.handleNewInputSubmit} handleDeleteInput={this.handleDeleteInput} practical={this.state.practical} />
				<div className='c-form__group'>
					<button type='submit' className='c-btn c-form__group__submitBtn'>Submit</button>
					<button type='button' className='c-btn c-form__group__clearBtn' onClick={this.clearLocalStorage}>Clear Form</button>
				</div>
			</form>
			<FormView state={this.state} />
		</div>
		);
	}
}
*/

export default App;
