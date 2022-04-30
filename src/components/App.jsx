import { useState } from 'react';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = event => {
    const { name } = event.target;

    switch (name) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedbacks = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    const allFeedbacks = good + neutral + bad;
    if (good === 0) {
      return 0;
    }
    return ((good / allFeedbacks) * 100).toFixed(1);
  };
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={handleClick}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedbacks() === 0 ? (
          <Notification message="There is no feedback yet" />
        ) : (
          <Statistics
            feedbacks={{ good, neutral, bad }}
            total={countTotalFeedbacks}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        )}
      </Section>
    </div>
  );
}
