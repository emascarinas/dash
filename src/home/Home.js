import React, { Component } from 'react';
import {AuthButton} from "../auth/util"

class Home extends Component {

  render() {
    return (
    <div>
      <h2>Home</h2>
      <AuthButton />
    </div>
    );
  }
}

export default Home;