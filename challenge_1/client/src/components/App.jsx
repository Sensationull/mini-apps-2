import React from 'react';
import Search from './Search.jsx';
import List from './List.jsx';
import ReactPaginate from 'react-paginate';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      pageCount: 2000,
      query: ''
    };

    this.handlePageClick = this.handlePageClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    console.log('This is e', e.target.value);
    this.setState({
      query: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch(`/events?q=${this.state.query}&_limit=10`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then((data) => {
        this.setState({
          list: data
        });
      })
      .then(() => {
        this.setState ({
          query: ''
        });
      })
      .catch(() => console.log(error));
    console.log(this.state.list);
  }
  
  handlePageClick(data) {
    let selected = data.selected;

    fetch(`/events/?_page=${selected}&_limit=10`)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          list: data,
        });
      })
      .catch(() => console.log('Error'));
  }
  componentDidMount() {
    this.handlePageClick(1);
  }

  render() {
    if (this.state.list.length > 1) {
      return (
        <div>
          <Search input= {this.handleChange} sub={this.handleSubmit}/>
          <List list={this.state.list} />
          <ReactPaginate previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"} />
        </div>
      );
    } else { 
      return (
        <div>
          <Search/>
        </div>
      );
    }
  }
}

export default App;