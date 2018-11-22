import React, { Component } from 'react';
import './ChartLine.scss';

class ChartLine extends Component {
  render() {
  	let style = {
  		width: this.props.per + '%',
  	};

    return (
		<div className="e-line-graph">
			<div>{this.props.per}%</div>
			<div style={style}></div>
		</div>
    );
  }
}

export default ChartLine;
