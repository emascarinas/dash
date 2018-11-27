import React, { Component } from 'react';
import ChartCircle from './components/ChartCircle';
import globe from './images/globe.png';
import './Receive.scss';
import StatusList from './StatusList';


class Receive extends Component {

  render() {
    return (
      <div className="Receive text-center text-black-50">
				<ChartCircle image={globe} color='#eba800' per="54"/>
				<div>
					ENERGY SAVED<br/>(KWH)
				</div>
				<div>
					<span className="text-warning">5500</span> of 100000
				</div>
				<button type="button" className="e-details btn border my-4 btn-secondary">DETAILS</button>
				<p className="mt-5 text-left text-success e-label e-label-2">RECEIVED</p>

        <StatusList />

      </div>
    );
  }
}

export default Receive;
