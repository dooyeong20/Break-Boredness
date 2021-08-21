import React from 'react';
import styled from 'styled-components';
import { useBreakBorednessContext } from 'src/contexts/BreakBorednessContext';

const StyledTypeItem = styled.div`
  position: relative;
  overflow: hidden;

  text-align: center;
  font-size: 0.9rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  color: ${({ theme }) => theme.bgColor};

  width: 10rem;
  height: 10rem;

  border-radius: 15px;
  color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.fgColor : theme.bgColor};
  background: ${({ $isSelected, theme }) =>
    $isSelected ? theme.bgColor : theme.fgColor};

  box-shadow: 1px 2px 10px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.25s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(105%);
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
    fill: ${({ $isSelected, theme }) =>
      $isSelected ? theme.fgColor : theme.bgColor};
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
