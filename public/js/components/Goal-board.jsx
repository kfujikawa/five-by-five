import React from 'react';
import Header from './Header.jsx';
import Banner from './Banner.jsx';
import Introduction from './Introduction.jsx';
import GoalContainer from './Goal-container.jsx';
import GoalList from './GoalList.jsx';
import Footer from './Footer.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import { isAuthenticated, notAuthed } from '../../utils';

const PrivateRoute = ({ component: Component, rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.token
        ? <Component {...props} />
        : <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />}
  />
);

export default class GoalBoard extends React.Component {
  constructor(props) {
    super(props);
  }

  authenticated() {
    if (localStorage.token) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div className="goal-board">
        <Header />
        <Banner />
        {!isAuthenticated() &&
          <Route
            path="/login"
            render={() => {
              return (
                <div>
                  <Login />
                </div>
              );
            }}
          />}
        <Route
          path="/register"
          render={() => {
            return (
              <div>
                <Register />
              </div>
            );
          }}
        />
        <Introduction />
        {isAuthenticated() && <GoalList />}

        <Footer />
      </div>
    );
  }
}
