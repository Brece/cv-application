import React from 'react';
import GeneralInformation from './components/General-information';
import EducationalExperience from './components/Educational-experience';
import PracticalExperience from './components/Practical-experience';

class App extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    
    return (
      <div className="App">
        <GeneralInformation />
        <EducationalExperience />
        <PracticalExperience />
      </div>
    );
  }
}

export default App;
