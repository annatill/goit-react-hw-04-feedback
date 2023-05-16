import propTypes from 'prop-types';
import { Section, Title } from './SectionStatistics.styled';

export const SectionStatistics = ({ title, children }) => {
  return (
    <Section>
      <Title>{title}</Title>
      {children}
    </Section>
  );
};

SectionStatistics.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};
