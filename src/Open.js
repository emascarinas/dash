import React, { Component } from 'react';
import ChartCircle from './components/ChartCircle';
import StatusItem from './components/StatusItem';
import money from './images/money.png';
import './Open.scss';

class Open extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [
    	{
    		date: {month: 'NOV', day: '12', year: '2014'},
    		type: {name: 'Mobile reCell', value: '25 Devices'},
    		status: {name: 'pending', value: 'quote'}
    	},
    	{
    		date: {month: 'JAN', day: '13', year: '2014'},
    		type: {name: 'ABC Company', value: '5 Devices'},
    		status: {name: 'pending', value: 'approval'}
    	}
    	]};
  }

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

				<StatusItem item={this.state.items[0]} />
				<StatusItem item={this.state.items[1]}/>
				<StatusItem item={this.state.items[0]}/>
				<StatusItem item={this.state.items[1]}/>
      </div>
    );
  }
}

export default Open;
