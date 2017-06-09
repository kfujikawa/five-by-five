import React from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated, logout } from '../../utils';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="/home" className="logo">Five By Five</a>
          <nav>
            {!isAuthenticated() &&
              <Link to="/login">
                <span className="glyphicon glyphicon-log-in" /> Login
              </Link>}
            {isAuthenticated() &&
              <a href="#" onClick={logout}>
                <span className="glyphicon glyphicon-log-out" /> Logout
              </a>}
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
