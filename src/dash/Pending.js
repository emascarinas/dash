import React, { Component } from 'react';
import ChartCircle from './components/ChartCircle';
import StatusList from './StatusList';
import cell from './images/cell.png';
import './Pending.scss';


class Pending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  render() {
    return (
      <div className="Pending text-center text-black-50">
				<ChartCircle image={cell} color='#f66b3e' per="28"/>
				<div>
					REQUESTED DEVICES<br/> PROCESSED
				</div>
				<div>
					<span className="text-danger">52</span> of 184
				</div>
				<button type="button" className="e-details btn border my-4 btn-secondary">DETAILS</button>
				<p className="mt-5 text-left text-success e-label e-label-1">PENDING REQUESTS</p>

        <StatusList />

      </div>
    );
  }
}

export default Pending;
