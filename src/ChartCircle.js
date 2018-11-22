import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class ChartCicle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      optionsRadial: {
        plotOptions: {
				radialBar: {
					hollow: {
						margin: 15,
						size: '70%',
						image: 'https://apexcharts.com/samples/assets/images/clock.png',
						imageWidth: 64,
						imageHeight: 64,
						imageClipped: false
					},
					dataLabels: {
						name: {
							show: false,
							color: '#fff'
						},
						value: {
							show: true,
							color: '#333',
							offsetY: 70,
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
