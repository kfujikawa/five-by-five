import React from 'react';
import Goal from './Goal.jsx';
const basePath = '/images';
export default class GoalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.appendGoals = this.appendGoals.bind(this);
    this.state = {
      images: {
        career: `${basePath}/home-office-336378_1280.jpg`,
        relationships: `${basePath}/heart-1787863_1280.jpg`,
        health: `${basePath}/fresh-orange-juice-1614822_1280.jpg`,
        wealth: `${basePath}/euro-1353420_1280.jpg`
      }
    };
    this.resolveImage = this.resolveImage.bind(this);
  }

  appendGoals() {
    if (this.props.goals && this.props.goals.length) {
      {
        return this.props.goals.map(goal => {
          return (
            <Goal
              key={goal._id}
              name={goal.name}
              id={goal._id}
              isChecked={goal.isChecked}
            />
          );
        });
      }
    }
  }

  resolveImage(type) {
    return this.state.images[type];
  }

  render() {
    return (
      <div className="goal-category">
        <div className="image fit img-margin">
          <img src={this.resolveImage(this.props.type)} alt="" />
        </div>
        <ul className="content goal-content">
          <header>
            <h3>{this.props.type}</h3>
          </header>
          {this.appendGoals()}
        </ul>
      </div>
    );
  }
}
