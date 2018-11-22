import React, { Component } from 'react';
import ChartLine from './ChartLine';

class Report extends Component {
  render() {
    return (
      <div className="Report">
				<div className="text-black-50 my-3 e-line-left text-uppercase">Reports</div>
				<div className="text-black-50 my-3 e-line-left text-uppercase">Trade-in sumary</div>
				<p>Average Condition Score</p>
				<ChartLine per="94" />
				<p className="mt-4">Recycled</p>
				<ChartLine per="14" />
				<p className="mt-4">Reused</p>
				<ChartLine per="29" />
				<div className="card mt-4">
					<div className="card-body text-center">
						<h5>Tools</h5>
						<button type="button" className="btn btn-primary text-white mb-3">Fair Market Value</button>
						<button type="button" className="btn btn-primary text-white mb-3">Market Insights</button>
						<button type="button" className="btn btn-primary text-white mb-3">Quote Generator</button>
					</div>
				</div>
      </div>
    );
  }
}

export default Report;
