import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodStatistic = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  handleNeutralStatistic = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  handleBadStatistic = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  // handleCountStatistics = () => {
  //   this.setState(prevState => {
  //     return {
  //       total: prevState.good + prevState.neutral + prevState.bad,
  //     };
  //   });
  // };

  render() {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;

    return (
      <div>
        <h2>Please leave feedback</h2>
        <button type="button" onClick={this.handleGoodStatistic}>
          Good
        </button>
        <button type="button" onClick={this.handleNeutralStatistic}>
          Neutral
        </button>
        <button type="button" onClick={this.handleBadStatistic}>
          Bad
        </button>
        <h2>Statistics</h2>
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {good + neutral + bad}</li>
          <li>Positive feedback:</li>
        </ul>
      </div>
    );
  }
}

export default Feedback;
