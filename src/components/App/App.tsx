import React from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import User from '../User/User';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';

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
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </header>
        {/* <Route exact path="/" component={Home} /> */}
        <Route path="/" component={Home} />
        <Route path="/user" component={User} />
        <Route path="/contact" component={Contact} />
      </Router>
    </div>
  );
}

export default App;
