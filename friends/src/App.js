import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router,Route,Link,Switch } from "react-router-dom";
import Login from "./components/Login";
import Protected from "./components/Protected";
import PrivateRoute from "./components/PrivateRoute";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
<link to="/Login">Login</link>
<link to="/Protected">Protected</link>
<switch>
  <PrivateRoute exact path="/Protected" />
  <Route path="/Login" component={Login}/>
  <Route component ={Login}/>
  
</switch>

        </header>
      </div>
    </Router>

  );
}

export default App;
