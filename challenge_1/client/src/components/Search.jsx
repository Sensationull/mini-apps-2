import React from 'react';

const Search = (props) => (
  <form onSubmit={props.sub}>
    <input name="query" placeholder= "Whatchu wanna know?" onChange={props.input}></input>
    <input type="submit"></input>
  </form>
);


export default Search;