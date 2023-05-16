import propTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => (
        <Button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </Button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};
