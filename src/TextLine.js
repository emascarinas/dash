import React, { Component } from 'react';
import './LeftMenu.scss'

class LeftMenu extends Component {
  render() {
    return (
      <div className="LeftMenu">
		<button type="button" className="btn border btn-secondary text-info my-3">Where do I start ></button>
		<div className="text-light mt-3 mb-4 e-line-left text-uppercase">Customers</div>
		<div className="text-success my-3">"View Only" Customers</div>
		<button type="button" className="btn btn-primary mb-3 text-white">Add Customer</button>
		<button type="button" className="btn btn-secondary border text-dark mb-2">ABC Company</button>
		<button type="button" className="btn btn-secondary border text-dark mb-2">Demo Company 1</button>
		<button type="button" className="btn btn-secondary border text-dark mb-2">Demo Company 2</button>
		<button type="button" className="btn btn-secondary border text-dark mb-2">Demo Company 3</button>
		<button type="button" className="btn btn-secondary border text-dark mb-2">Demo Company 4</button>
      </div>
    );
  }
}

export default LeftMenu;
