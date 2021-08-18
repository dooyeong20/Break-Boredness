import React from 'react';
import styled from 'styled-components';

const StyledTypeItem = styled.div.attrs(({ theme }) => {
  const { fgColor, bgColor, textColor } = theme;

  return {
    $fgColor: bgColor,
    $bgColor: fgColor,
    $textColor: textColor,
  };
})`
  text-align: center;
  font-size: 0.9rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  color: ${({ $textColor }) => $textColor};

  width: 10rem;
  height: 10rem;

  border-radius: 15px;
  background: ${({ $bgColor }) => $bgColor};

  box-shadow: 1px 3px 15px 0 rgba(0, 0, 0, 0.4);
  transition: all 0.25s ease-in-out;
  &:hover {
    transform: scale(105%);
    box-shadow: 1px 3px 30px 0 rgba(0, 0, 0, 0.8);
  }

  p {
    width: 80%;
    margin: auto;
    margin-top: 0.8rem;
  }

  svg {
    margin-top: 1rem;
    height: 5rem;
    width: 5rem;
    fill: ${({ $textColor }) => $textColor};
  }
`;

export default function TypeItem({ category }) {
  const { detail, SVG } = category;

  return (
    <StyledTypeItem>
      <SVG />
      <p>{detail}</p>
    </StyledTypeItem>
  );
}
