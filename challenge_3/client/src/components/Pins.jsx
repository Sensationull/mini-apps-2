import React from 'react';

const Pins = (props) => (
  <div className="pins" onClick={props.score}>
    <i className="pin">1</i>
    <i className="pin">2</i>
    <i className="pin">3</i>
    <i className="pin">4</i>
    <i className="pin">5</i>
    <i className="pin">6</i>
    <i className="pin">7</i>
    <i className="pin">8</i>
    <i className="pin">9</i>
    <i className="pin">10</i>
    <i className="pin">0</i>
  </div>
);

export default Pins;