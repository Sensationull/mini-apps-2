import React from 'react';
// import Chart from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';

var something = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [{
    label: "Bitcoin Prices",
    backgroundColor: 'rgb(24, 99, 132)',
    borderColor: 'rgb(239, 90, 37)',
    data: [0, 10, 5, 2, 20, 30, 45],
  }]
};

// const MainChart = new Chart(ctx)
const MainChart = (props) => (
  <Line data={props.datas}></Line>
);

export default MainChart;