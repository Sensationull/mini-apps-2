import React from 'react';
import Pins from './Pins.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
    };
    this.pinClick = this.pinClick.bind(this);
  }

  pinClick (e) {
    var pin = parseInt(e.target.innerText);
    this.setState({
      score: this.state.score + pin,
    }); 
  }

  render() {
    console.log('the pin total', this.state.score);
    return (
      <div>Bowling ScoreCard
        <Pins score={this.pinClick}></Pins>
      </div>
    );
  }
}

export default App;