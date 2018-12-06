import React from 'react';

const List = (props) => ( 
  <div>
    {props.list.map((item, index) => (
      <div key={index}>
        <div>category1: {item.category1} </div>
        <div>category2: {item.category2}</div>
        <div>date: {item.date}</div>
        <div>description: {item.description}</div>
        <div>granularity: {item.granularity}</div>
        <div>language: {item.lang}</div>
      </div>
    ))}
  </div>
);

export default List;