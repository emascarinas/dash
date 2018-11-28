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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dash">Dashboard</Link>
          </li>
          <li>
            <Link to="/trade">Trade (Protected Page)</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/dash" component={Dash} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/trade" component={Trade} />
      </div>
    </Router>
  );
}


export default App;