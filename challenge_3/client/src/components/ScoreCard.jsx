import React from 'react';

const ScoreCard = (props) => (
  <div>
    <div>Total Score: {props.bowl[props.bowl.length - 1]}
      {props.bowl.map(function(item, index) {  
        return <div key={index}>{item}</div>;
      })}
    </div>
  </div>
);

export default ScoreCard;