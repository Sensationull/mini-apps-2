import React from 'react';
import Search from './Search.jsx';
import List from './List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };

    this.goGetEm = this.goGetEm.bind(this);
  }


  goGetEm() {
    fetch(`/events/?_limit=10`)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          list: data,
        });
      })
      .catch(() => console.log('Error'));
  }

  componentDidMount() {
    this.goGetEm();
    console.log('this is list', this.state.list);
  }

  render() {
    if (this.state.list.length > 1) {
      return (
        <div>
          <Search/>
          <List list={this.state.list}/>
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