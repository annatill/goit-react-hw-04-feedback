import React, { Component } from 'react';
import { Feedback } from '../Feedback/Feedback';
import { Container } from '../App/App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback(feedback) {
    this.setState(prevState => {
      return {
        [feedback]: prevState[feedback] + 1,
      };
    });
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <Feedback
          good={good}
          neutral={neutral}
          bad={bad}
          onLeaveFeedback={feedback => this.onLeaveFeedback(feedback)}
        ></Feedback>
      </Container>
    );
  }
}
