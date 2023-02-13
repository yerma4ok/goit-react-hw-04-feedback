import { useState } from 'react';
import Section from './Section';
import Statistic from './Statistic';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

export default function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  function updateFeedbackState (el) {
    setFeedback(prevState => ({ ...prevState, [el]: prevState[el] + 1 }));
  }

  function getTotalFeedback() {
    return Object.values(feedback).reduce((preNumber, number) => {
      return preNumber + number;
    }, 0);
  }

  function getPositiveFeedbackPercentage() {
    return Math.round((feedback.good / getTotalFeedback()) * 100);
  }

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(feedback)}
            onLeaveFeedback={updateFeedbackState}
          />
        </Section>
        <Section title="Statistics">
          {getTotalFeedback ? (
            <Statistic
              good={feedback.good}
              neutral={feedback.neutral}
              bad={feedback.bad}
              total={getTotalFeedback}
              positivePercentage={getPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </>
    );
  }

