import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {grid: 10}

  }
  currentCell (e) {
    console.log('You\'re Clicking!!!', e.target.id);
  }

  render(){
    let oneRow = [];
    for (var i = 0; i < this.state.grid; i++){
      let rowID = `row${i}`
      let single = []
      for (var index = 0; index < this.state.grid; index++){
        let cellID = `single${i}-${index}`
        single.push(<td onClick={this.currentCell} className="lines" key={cellID} id={cellID}></td>)
      }
      oneRow.push(<tr key={i} id={rowID}>{single}</tr>)
    }
    return (
      <div className="container">
        <div className="rows">
          <div className="columns">
            <table id="board">
               <tbody>
                 {oneRow}
               </tbody>
             </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
