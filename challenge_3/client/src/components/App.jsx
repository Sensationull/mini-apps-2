import React from 'react';
import Pins from './Pins.jsx';
import ScoreCard from './ScoreCard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      frames: [],
      bowl: [],
    };
    this.pinClick = this.pinClick.bind(this);
  }

  pinClick (e) {
    var pin = parseInt(e.target.innerText);
    this.setState({
      score: this.state.score + pin,
    }); 
    this.state.bowl.push(this.state.score);
  }

  render() {
    console.log('the pin total', this.state.score);
    if (this.state.bowl) {
      return (
        <div>Bowling ScoreCard
          <Pins score={this.pinClick}></Pins>
          <ScoreCard bowl={this.state.bowl}/>
        </div>
      );
    } else {
      return (
        <div>
          <Pins score={this.pinClick}></Pins>
        </div>
      );
    }
  }
}

export default App;