import React, { Component } from 'react';
import ChartCircle from './ChartCircle';
import StatusItem from './StatusItem';


class Pending extends Component {
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
      <div className="Pending">
				pending request
				<ChartCircle per="28"/>
				<div>
					REQUESTED DEVICES PROCESSED
				</div>
				<div>
					<span>52</span> of 184
				</div>
				<button type="button" className="btn btn-outline-secondary">DETAILS</button>
				<p className="text-left text-success">PENDING REQUESTS</p>

				<StatusItem item={this.state.items[0]} />
				<StatusItem item={this.state.items[1]}/>
				<StatusItem item={this.state.items[0]}/>
				<StatusItem item={this.state.items[1]}/>
      </div>
    );
  }
}

export default Pending;
