import React from 'react';

const Pins = (props) => (
  <div className="pins" onClick={props.score}>
    <div className="pin">1</div>
    <div className="pin">2</div>
    <div className="pin">3</div>
    <div className="pin">4</div>
    <div className="pin">5</div>
    <div className="pin">6</div>
    <div className="pin">7</div>
    <div className="pin">8</div>
    <div className="pin">9</div>
    <div className="pin">10</div>
    <div className="pin">0</div>
  </div>
);

export default Pins;