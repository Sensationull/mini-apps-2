import React from 'react';
import Pins from './Pins.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: ''
    };
    this.pinClick = this.pinClick.bind(this);
  }

  pinClick (e) {
    var pin = e.target.innerText;
    console.log('pinclick state', pin);
    this.setState({
      score: pin,
    }); 
  }

  render() {
    return (
      <div>THE WORLD IS WAITING
        <Pins score={this.pinClick}></Pins>
      </div>
    );
  }
}

export default App;