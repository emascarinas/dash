import React, { Component } from 'react';

class LeftMenu extends Component {
  render() {
    return (
      <div className="LeftMenu">
		<button type="button" className="btn btn-outline-secondary text-primary my-3">Where do I start ></button>
		<div className="text-black-50 my-3 e-line-left text-uppercase">Customers</div>
		<div className="text-success my-3">"View Only" Customers</div>
		<button type="button" className="btn btn-primary mb-3 text-white">Add Customer</button>
		<button type="button" className="btn btn-secondary border text-dark mb-2">ABC Company <span className="text-primary">></span></button>
		<button type="button" className="btn btn-secondary border text-dark mb-2">Demo Company <span className="text-primary">></span></button>
      </div>
    );
  }
}

export default LeftMenu;
