import React, { Component } from 'react';
import './StatusItem.scss';

class StatusItem extends Component {
  render() {
    return (
		<div className="e-row e-list StatusItem">
			<div className="e-col-sm">
				<div className="e-date border my-1">
					<div>{this.props.item.date.month}</div>
					<div>{this.props.item.date.day}</div>
					<div>{this.props.item.date.year}</div>
				</div>
			</div>
			<div className="e-col-sm">
				<div className="e-desc text-left pt-2">
					<div>{this.props.item.type.name}</div>
					<div>{this.props.item.type.value}</div>
				</div>
			</div>
			<div className="e-col-sm">
				<div className="e-status text-left pt-2">
					<div>{this.props.item.status.name}</div>
					<div>{this.props.item.status.value}</div>
				</div>
			</div>
		</div>
    );
  }
}

export default StatusItem;
