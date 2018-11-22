import React, { Component } from 'react';
import './App.css';
import LeftMenu from './LeftMenu';
import Pending from './Pending';
import Open from './Open';
import Receive from './Receive';
import Report from './Report';


class App extends Component {
  render() {
    return (
      <div className="App container-fluid py-3">
        <div className="row">
          <div className="col-md">
            <LeftMenu items="emas" />
          </div>
          <div className="col-md text-center">
            <Pending />
          </div>
          <div className="col-md">
            <Open />
          </div>
          <div className="col-md">
            <Receive />
          </div>
          <div className="col-md">
            <Report />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
