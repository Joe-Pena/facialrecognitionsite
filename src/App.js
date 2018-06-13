import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageURLForm from './Components/ImageURLForm/ImageURLForm';
import Rank from './Components/Rank/Rank';
import Particles from 'react-particles-js';
import './App.css';


const ParticleOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

onButtonSubmit = () => {
  console.log('click');
}
  render() {
    return (
      <div className="App">
         <Particles className='Particles'
              params={ParticleOptions}
            />
        <Navigation />
        <Logo />
        <Rank />
        <ImageURLForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit}
        />
         {/*<FacialRecognition />*/}
      </div>
    );
  }
}

export default App;
