import styled from '@emotion/styled';

export const ListItem = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  font-size: 15px;
  margin-bottom: 20px;
  margin-top: 20px;
  font-weight: 500;
`;

export const Item = styled.li`
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;
