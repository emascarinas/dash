import React, { Component } from 'react';
import StatusItem from './components/StatusItem';

class StatusList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://emascarinas.github.io/dash/build/static/data.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
          <div>
          {items.map(item => (
            <StatusItem key={item.date.day} item={item} />
          ))}
          </div>
      );
    }
  }
}

export default StatusList;
