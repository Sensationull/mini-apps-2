import React from 'react';

const ScoreCard = (props) => (
  <div>
    {props.bowl.map(function(item, index) {  
      return <div key={index}>{item}</div>;
    })}
  </div>
);

export default ScoreCard;