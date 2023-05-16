import propTypes from 'prop-types';
import { SectionStatistics } from '../SectionStatistics/SectionStatistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';

export const Feedback = ({ good, neutral, bad, onLeaveFeedback }) => {
  function countTotalFeedback() {
    const total = good + neutral + bad;
    return total;
  }

  function countPositiveFeedbackPercentage() {
    const total = countTotalFeedback();
    const positiveFeedbackPercentage = Math.round((good / total) * 100);
    return positiveFeedbackPercentage;
  }
  return (
    <>
      <SectionStatistics title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
      </SectionStatistics>

      <SectionStatistics title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        ></Statistics>
      </SectionStatistics>
    </>
  );
};

Feedback.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};
