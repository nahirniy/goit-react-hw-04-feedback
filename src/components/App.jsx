import { Component } from 'react';

import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback = typeFeedback => {
    this.setState(prevState => ({
      [typeFeedback]: prevState[typeFeedback] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const {
      state,
      state: { good, neutral, bad },
      countFeedback,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;

    const total = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage();

    return (
      <div className="container">
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(state)}
            countFeedback={countFeedback}
          />
        </Section>

        <Section title={'Statistics'}>
          {total === 0 ? (
            <Notification />
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
  }
}

export default App;
