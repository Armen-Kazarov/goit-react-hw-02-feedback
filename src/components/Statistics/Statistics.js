import { Component } from 'react';
import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';
import s from '../../components/Statistics/Statistics.module.css';

class Statistics extends Component {
  render() {
    return (
      <>
        {this.props.total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <ul className={s.listItems}>
            <li>Good: {this.props.good}</li>
            <li>Neutral: {this.props.neutral}</li>
            <li>Bad: {this.props.bad}</li>
            <li>Total: {this.props.total}</li>
            <li>Positive feedback: {this.props.positivePercentage} %</li>
          </ul>
        )}
      </>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
