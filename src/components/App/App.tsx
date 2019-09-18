import React from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import User from '../User/User';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import Topic from '../Topic/Topic';
import SignIn from '../SignIn/SignIn';
import PrivateRoute from '../../utility/PrivateRoute';
import Dashboard from '../Dashboard/Dashboard';
import PublicRoute from '../../utility/PublicRoute';


const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/user">User</Link>
            </li>
            <li>
              <Link to="/basicuser">User(not restricted)</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/topic">Topic</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/user" component={User} /> */}
          <Route path="/contact" component={Contact} />
          <Route path="/topic" component={Topic} />
          <Route path="/signin" component={SignIn} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PublicRoute restricted={true} component={User} path="/user" />
          <PublicRoute restricted={false} component={User} path="/basicuser" />
          <Route render={() => <h1>404 Error</h1>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
