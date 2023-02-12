import React from 'react';
import { List, Text, Statistics } from './Statistic.styled';
import PropTypes from 'prop-types';

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <ul>
        <List>
          <Text>
            Good: <Statistics>{good}</Statistics>
          </Text>
        </List>
        <List>
          <Text>
            Neutral: <Statistics>{neutral}</Statistics>
          </Text>
        </List>
        <List>
          <Text>
            Bad: <Statistics>{bad}</Statistics>
          </Text>
        </List>
        <List>
          <Text>
            Total: <Statistics>{total}</Statistics>
          </Text>
        </List>
        <List>
          <Text>
            Positive feedback:{' '}
            <Statistics>{positivePercentage} %</Statistics>
          </Text>
        </List>
      </ul>
    </>
  );
};

export default Statistic;

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
