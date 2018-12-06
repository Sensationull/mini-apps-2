import React from 'react';

const List = (props) => ( 
  <div>
    {props.list.map((item, index) => (
      <div key={index}>
        <div>category1: {item.category1} </div>
        <div>{item.category2}</div>
        <div>{item.date}</div>
        <div>{item.description}</div>
        <div>{item.granularity}</div>
        <div>{item.lang}</div>
      </div>
    ))}
  </div>
);

export default List;