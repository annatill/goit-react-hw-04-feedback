import React, { useState } from 'react';
import { Feedback } from '../Feedback/Feedback';
import { Container } from '../App/App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = feedback => {
    switch (feedback) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  return (
    <Container>
      <Feedback
        good={good}
        neutral={neutral}
        bad={bad}
        onLeaveFeedback={feedback => onLeaveFeedback(feedback)}
      ></Feedback>
    </Container>
  );
};
