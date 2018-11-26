import React, { Component } from 'react';
import ChartCircle from './components/ChartCircle';
import StatusItem from './components/StatusItem';
import cell from './images/cell.png';
import './Pending.scss';


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

				<StatusItem item={this.state.items[0]} />
				<StatusItem item={this.state.items[1]}/>
				<StatusItem item={this.state.items[0]}/>
				<StatusItem item={this.state.items[1]}/>
      </div>
    );
  }
}

export default Pending;
