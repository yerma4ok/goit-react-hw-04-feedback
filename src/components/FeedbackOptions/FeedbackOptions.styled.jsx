import styled from '@emotion/styled';

export const ButtonList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 0;
`;

export const Button = styled.button`
  min-width: 80px;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid grey;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.14;
  background-color: #ffffff;
  transition: color 250ms linear;
  transition: background-color 250ms linear;
  :hover,
  :focus {
    background-color: #2196f3;
    color: #00000044;
  }
  ::first-letter {
    text-transform: uppercase;
  }
`;
