import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartInfo: '',
    };
    this.generateChart = this.generateChart.bind(this);
  }

  generateChart() {
    fetch('/current')
      .then(response => response.json())
      .then((data) =>{
        this.setState({
          chartInfo: data,
        });
      })
      .catch(() => console.log('Error'));
  }

  componentDidMount() {
    this.generateChart();
  }

  render() {
    (console.log('this is the chart Info', this.state.chartInfo.bpi));
    return (
      <div>Hello</div>
    );
  }
}

export default App;