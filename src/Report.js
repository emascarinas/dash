import React, { Component } from 'react';
import ChartLine from './components/ChartLine';
import './Report.scss';
import tool from './images/tool.png';

class Report extends Component {
  render() {
    return (
      <div className="Report">
				<div className={['text-black-50','my-3', 'e-line-left' , 'text-uppercase'].join(' ')}>Reports</div>
				<div className={['text-black-50','my-3', 'e-line-left' , 'text-uppercase'].join(' ')}>Trade-in sumary</div>
				<p>Average Condition Score</p>
				<ChartLine per="94" />
				<p className="mt-4">Recycled</p>
				<ChartLine per="14" />
				<p className="mt-4">Reused</p>
				<ChartLine per="29" />
				<div className="e_card_container"><img src={tool} />
					<div className={['card', 'mt-4'].join(' ')}>
						<div className="card-body text-center">
							<h5 className="mt-4">Tools</h5>
							<button type="button" className="btn btn-primary text-white mb-3">Fair Market Value</button>
							<button type="button" className="btn btn-primary text-white mb-3">Market Insights</button>
							<button type="button" className="btn btn-primary text-white mb-3">Quote Generator</button>
						</div>
					</div>
				</div>
      </div>
    );
  }
}

export default Report;
