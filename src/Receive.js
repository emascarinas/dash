import React, { Component } from 'react';
import ChartCircle from './components/ChartCircle';
import StatusItem from './components/StatusItem';
import globe from './images/globe.png';
import './Receive.scss';


class Receive extends Component {
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

				<StatusItem item={this.state.items[0]} />
				<StatusItem item={this.state.items[1]}/>
				<StatusItem item={this.state.items[0]}/>
				<StatusItem item={this.state.items[1]}/>
      </div>
    );
  }
}

export default Receive;
