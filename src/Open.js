import React, { Component } from 'react';
import ChartCircle from './components/ChartCircle';
import money from './images/money.png';
import './Open.scss';
import StatusList from './StatusList';

class Open extends Component {

  render() {
    return (
      <div className="Open text-center text-black-50">
				<ChartCircle image={money} color='#00d7ff' per="3"/>
				<div>
					TOTAL VALUE RECOVERED
				</div>
				<div>
					<span className="text-primary">$9960</span> of 249872<br/> (estimated)
				</div>
				<button type="button" className="e-details btn border my-4 btn-secondary">DETAILS</button>
				<p className="mt-5 text-left text-success e-label e-label-3">OPEN TRANSACTIONS</p>

        <StatusList />

      </div>
    );
  }
}

export default Open;
