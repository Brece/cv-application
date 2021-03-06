import React, { useEffect, useState } from 'react';
import GeneralInformation from './General-information';
import EducationalExperience from './Educational-experience';
import PracticalExperience from './Practical-experience';
import FormView from './FormView';

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
		<div className='c-app'>
			<div className='c-app__form'>
				<GeneralInformation handleNewInputSubmit={handleNewInputSubmit} handleDeleteInput={handleDeleteInput} general={state.general[0]} />
				<EducationalExperience handleNewInputSubmit={handleNewInputSubmit} handleDeleteInput={handleDeleteInput} educational={state.educational} />
				<PracticalExperience handleNewInputSubmit={handleNewInputSubmit} handleDeleteInput={handleDeleteInput} practical={state.practical} />
				<div className='c-form__group'>
					<button type='button' className='c-btn c-form__group__clearBtn' onClick={clearLocalStorage}>Clear Form</button>
				</div>
			</div>
			<FormView state={state} />
		</div>
		);
}

export default App;
