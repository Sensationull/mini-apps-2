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


  // var something = {
  //   labels: ["January", "February", "March", "April", "May", "June", "July"],
  //   datasets: [{
  //     label: "Bitcoin Prices",
  //     backgroundColor: 'rgb(24, 99, 132)',
  //     borderColor: 'rgb(239, 90, 37)',
  //     data: [0, 10, 5, 2, 20, 30, 45],
  //   }]
  // };

  generateChart() {
    fetch('/current')
      .then(response => response.json())
      .then((data) => {
        var neo = [];
        var morpheus = [];
        for (var key in data.bpi) { // this.setState or create an temp array?
          neo.push(key);
          morpheus.push(data.bpi[key]);
        }
        
        this.setState({
          chartInfo: data,
          disclaim: data.disclaimer,
          dates: neo,
          closingPrice: morpheus,
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
    console.log('this is the chart Info', this.state.chartInfo);
    console.log('These are the dates', this.state.dates);
    console.log('These are the closing prices', this.state.closingPrice);
    console.log('These are the datas for Chart.js', this.state.object);
    if (!this.state.object) {
      return (
        <div>Hello</div>
      );
    } else {
      return (
        <div>
          <div>Hello</div>
          <MainChart datas={this.state.object}/>
          <div>{this.state.disclaim}</div>
        </div>
      );
    }
  }
}

export default App;