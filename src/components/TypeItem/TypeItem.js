import React from 'react';
import styled from 'styled-components';
import { useBreakBorednessContext } from 'src/contexts/BreakBorednessContext';

const StyledTypeItem = styled.div.attrs(({ theme }) => {
  const { fgColor, bgColor, textColor } = theme;

  return {
    $fgColor: bgColor,
    $bgColor: fgColor,
    $textColor: textColor,
  };
})`
  position: relative;
  overflow: hidden;

  text-align: center;
  font-size: 0.9rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  color: ${({ $textColor }) => $textColor};

  width: 10rem;
  height: 10rem;

  border-radius: 15px;
  color: ${({ $isSelected, $textColor }) =>
    $isSelected ? $textColor : '#f8f9fa'};
  background: ${({ $bgColor, $isSelected }) =>
    $isSelected ? $bgColor : '#343a40'};

  box-shadow: 1px 3px 15px 0 rgba(0, 0, 0, 0.7);
  transition: all 0.25s ease-in-out;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    left: -1px;
    right: -1px;
    bottom: -1px;
    top: -1px;

    transition: all 0.25s ease-in-out;
  }

  &:hover {
    transform: scale(105%);
    box-shadow: 1px 3px 30px 0 rgba(0, 0, 0, 0.5);

    &::after {
      content: '${({ $detail }) => $detail}';
      color: #f8f9fa;
      line-height: 140%;
      background: rgba(0, 0, 0, 0.85);
    }
  }

  h3 {
    font-size: 0.9rem;
    text-align: center;
    margin-top: 1rem;
  }

  svg {
    margin-top: 1rem;
    height: 5rem;
    width: 5rem;
    fill: ${({ $textColor, $isSelected }) =>
      $isSelected ? $textColor : '#f8f9fa'};
  }
`;

export default function TypeItem({ category }) {
  const { title, detail, SVG } = category;
  const { state, dispatch } = useBreakBorednessContext();

  return (
    <StyledTypeItem
      onClick={() => {
        dispatch({ type: 'CATEGORY', category: title });
      }}
      $detail={detail}
      $isSelected={state.category === title}
    >
      <SVG />
      <h3>{title}</h3>
    </StyledTypeItem>
  );
}
