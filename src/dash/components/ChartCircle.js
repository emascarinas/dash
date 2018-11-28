import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class ChartCicle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      optionsRadial: {
      	colors: ['#24d3a7'],
        plotOptions: {
				radialBar: {
					hollow: {
						margin: 20,
						size: '70%',
						image: this.props.image,
						imageWidth: 32,
						imageClipped: false,
						imageOffsetY: -15
					},
					dataLabels: {
						name: {
							show: false,
							color: '#fff'
						},
						value: {
							show: true,
							color: this.props.color,
							offsetY: 25,
							fontSize: '22px'

						}
					}
				},
			},
      },
      seriesRadial: [this.props.per]
    }
  }

  render() {

    return (
      <div className="app">
           <Chart options={this.state.optionsRadial} series={this.state.seriesRadial} type="radialBar" width="280" />
      </div>
    );
  }
}

export default ChartCicle;
