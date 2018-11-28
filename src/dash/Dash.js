import React, { Component } from 'react';
import './Dash.scss';
import LeftMenu from './LeftMenu';
import Pending from './Pending';
import Open from './Open';
import Receive from './Receive';
import Report from './Report';


class Dash extends Component {
  render() {
    return (
      <div className="Dash container-fluid py-3">
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

export default Dash;
