import React from 'react';
import { Line } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';

const MainChart = (props) => (
  <Line data={props.datas}></Line>
);

export default MainChart;