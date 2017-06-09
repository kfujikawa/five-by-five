import React from 'react';
import fetch from 'isomorphic-fetch';

class Goal extends React.Component {
  constructor(props) {
    super(props);
    this.deleteGoal = this.deleteGoal.bind(this);
    this.updateGoal = this.updateGoal.bind(this);
    this.state = {
      isChecked: this.props.isChecked,
      visible: true
    };
  }

  deleteGoal(event) {
    const id = event.target.parentNode.getAttribute('value');
    console.log('this is deleteGoal in goal component');
    fetch(`/api/goals/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + localStorage.token
      }
    })
      .then(response => {
        this.setState({ visible: false });

        return Promise.resolve();
      })
      .catch(error => {
        console.log(error);
      });
  }

  updateGoal(event) {
    const id = event.target.parentNode.getAttribute('value');
    const isChecked = event.target.checked;

    fetch(`/api/goals/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + localStorage.token
      },
      body: JSON.stringify({
        isChecked: isChecked
      })
    })
      .then(response => response.json())
      .then(response => {
        this.setState({ isChecked: isChecked });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <li
        style={!this.state.visible ? { display: 'none' } : {}}
        value={this.props.id}
        className="6u$ 12u$(small)">
        <input
          type="checkbox"
          onChange={this.updateGoal}
          className={this.state.isChecked ? 'strikethrough' : ''}
          checked={this.state.isChecked}
        />
        <span><label>{this.props.name}</label></span>
        <a onClick={this.deleteGoal}>Delete</a>
      </li>
    );
  }
}

export default Goal;
