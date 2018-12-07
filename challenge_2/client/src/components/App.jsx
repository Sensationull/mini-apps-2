import React from 'react';
import MainChart from './MainChart.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartInfo: '',
      closingPrice: [],
      dates: [],
      disclaim: '',
    };
    this.generateChart = this.generateChart.bind(this);
  }

  generateChart() {
    fetch('/current')
      .then(response => response.json())
      .then((data) => {
        var date = Object.keys(data.bpi);
        var closingP = Object.values(data.bpi);
        
        this.setState({
          chartInfo: data,
          disclaim: data.disclaimer,
          dates: date,
          closingPrice: closingP,
        });

        this.setState({
          object: {
            labels: this.state.dates,
            datasets: [{
              label: 'Bitcoin Prices',
              backgroundColor: 'rgb(24, 99, 132)',
              borderColor: 'rgb(239, 90, 37)',
              data: this.state.closingPrice,
            }]
          }
        });
      })
      .catch(() => console.log('Error'));
  }

  componentDidMount() {
    this.generateChart();
  }

  render() {
    if (!this.state.object) {
      return (
        <div>Hello</div>
      );
    } else {
      return (
        <div>
          <MainChart datas={this.state.object}/>
          <div>{this.state.disclaim}</div>
        </div>
      );
    }
  }
}
export default App;