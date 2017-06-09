import React from 'react';
import fetch from 'isomorphic-fetch';
import Goal from './Goal.jsx';
import GoalContainer from './Goal-container.jsx';

class GoalList extends React.Component {
  constructor(props) {
    super(props);
    this.onAddSubmit = this.onAddSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.removeItem = this.removeItem.bind(this);
    this.getGoals = this.getGoals.bind(this);
    this.filter = this.filter.bind(this);

    this.state = {
      goals: {},
      name: '',
      selected: ''
    };
  }

  filter(response) {
    const filtered = {};
    filtered.health = [];
    filtered.relationships = [];
    filtered.career = [];
    filtered.wealth = [];

    for (const goal of response) {
      switch (goal.type) {
        case 'health':
          filtered.health.push(goal);
          break;
        case 'relationships':
          filtered.relationships.push(goal);
          break;
        case 'career':
          filtered.career.push(goal);
          break;
        case 'wealth':
          filtered.wealth.push(goal);
          break;
      }
    }
    this.setState({ goals: filtered });
  }

  getGoals() {
    fetch('/api/goals', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + localStorage.token
      }
    })
      .then(response => response.json())
      .then(response => {
        this.filter(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getGoals();
  }

  onAddSubmit(event) {
    event.preventDefault();
    fetch('/api/goals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + localStorage.token
      },
      body: JSON.stringify({
        name: this.refs.name.value,
        type: this.state.selected
      })
    })
      .then(response => response.json())
      .then(response => {
        this.filter(response);
      })
      .catch(error => {
        console.log(error);
      });
      this.refs.name.value = "";
  }

  handleChange(e) {
    this.setState({ selected: e.target.value });
  }

  render() {
    const list = Object.keys(this.state.goals).map((goal, index) => {
      if (this.state.goals[goal].length) {
        return (
          <GoalContainer
            key={index}
            type={goal}
            goals={this.state.goals[goal]}
          />
        );
      }
    });

    return (
      <div className="list">
        <form className="register-login-form" onSubmit={this.onAddSubmit}>
          <select value={this.state.selected} onChange={this.handleChange}>
            <option value="select-option">Choose a category</option>
            <option value="relationships">Relationships</option>
            <option value="career">Career</option>
            <option value="health">Health</option>
            <option value="wealth">Wealth</option>
          </select>
          <div className="field">
          <label>Goals:</label>
            <input ref="name" type="text" placeholder="Add a Goal!" />
            <button type="submit" value="Submit">Submit</button>
          </div>
        </form>
        <section id="three">
          <div className="inner">
            {list}
          </div>
        </section>
      </div>
    );
  }
}

export default GoalList;
