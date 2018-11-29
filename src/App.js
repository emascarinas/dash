import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dash from "./dash/Dash";
import Login from "./auth/Login";
import Home from "./home/Home";
import Trade from "./trade/Trade"
import PrivateRoute from "./auth/PrivateRoute"
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App mt-3">
        <ul className="Nav">
          <li>
            <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
          </li>
          <li>
            <Link to={`${process.env.PUBLIC_URL}/dash`}>Dashboard</Link>
          </li>
          <li>
            <Link to={`${process.env.PUBLIC_URL}/trade`}>Trade (Protected Page)</Link>
          </li>
        </ul>

        <hr />

        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dash} />
        <Route path={`${process.env.PUBLIC_URL}/dash`} component={Dash} />
        <Route path={`${process.env.PUBLIC_URL}/login`} component={Login} />
        <PrivateRoute path={`${process.env.PUBLIC_URL}/trade`} component={Trade} />
      </div>
    </Router>
  );
}


export default App;