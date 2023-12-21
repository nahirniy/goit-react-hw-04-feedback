import { useState } from 'react';

import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [values, setValue] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const countFeedback = typeFeedback => {
    setValue(prevState => ({
      ...prevState,
      [typeFeedback]: prevState[typeFeedback] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = values;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((values.good / countTotalFeedback()) * 100);
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  const { good, neutral, bad } = values;

  return (
    <div className="container">
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys(values)}
          countFeedback={countFeedback}
        />
      </Section>

      <Section title={'Statistics'}>
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </div>
  );
};
