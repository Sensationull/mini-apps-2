import React from 'react';

const List = (props) => ( 
  <div>
    {props.list.map((item, index) => (
      <ul key={index}>
        <li>{item.category2}</li>
        <li>{item.date}</li>
        <li>{item.description}</li>
      </ul>
    ))} 
  </div>
);

export default List;