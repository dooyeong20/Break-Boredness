import React from 'react';
import styled from 'styled-components';

const StyledTypeBar = styled.div.attrs(({ theme }) => {
  const { bgColor, textColor } = theme;

  return {
    $bgColor: bgColor,
    $textColor: textColor,
  };
})`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ $textColor }) => $textColor};
  background: ${({ $bgColor }) => $bgColor};

  margin-top: 60px;
  height: 2.4rem;
`;

const StyledTypeSelectButton = styled.button.attrs(({ theme }) => {
  const { fgColor, textColor } = theme;

  return {
    $bgColor: fgColor,
    $textColor: textColor,
  };
})`
  padding: 0 1rem;
  font-size: 0.8rem;
  letter-spacing: 0.2rem;
  height: 70%;
  background: ${({ $bgColor }) => $bgColor};
  border-radius: 40px;

  text-transform: uppercase;
  font-weight: bold;

  cursor: pointer;
  transition: all 0.1s ease-in-out;

  box-shadow: 1px 3px 15px 0 rgba(0, 0, 0, 0.4);

  &:hover {
    transform: scale(105%);
  }

  &:active {
    transform: scale(100%);
  }
`;

export default function TypeBar() {
  return (
    <StyledTypeBar>
      <StyledTypeSelectButton>random</StyledTypeSelectButton>
    </StyledTypeBar>
  );
}
