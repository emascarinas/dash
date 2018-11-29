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
        <div className="e-row">
          <div className="e-col-md">
            <LeftMenu items="emas" />
          </div>
          <div className="e-col-md text-center">
            <Pending />
          </div>
          <div className="e-col-md">
            <Open />
          </div>
          <div className="e-col-md">
            <Receive />
          </div>
          <div className="e-col-md">
            <Report />
          </div>
        </div>
      </div>
    );
  }
}

export default Dash;
