import React, { useState } from 'react';
import styled from 'styled-components';
import { HiOutlineSun, HiMoon } from 'react-icons/hi';
import { useBreakBorednessContext } from 'src/contexts';

const StyledToggleButton = styled.div`
  position: absolute;
  z-index: 2;

  top: 1rem;
  left: 50%;
  transform: translate(-50%, 0);

  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 5rem;
  height: 2rem;

  border-radius: 5rem;

  background: ${({ theme }) => theme.bgColor};
  cursor: pointer;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);

  svg {
    fill: ${({ theme }) => theme.fgColor};
    stroke: ${({ theme }) => theme.fgColor};
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const StyledGlider = styled.div`
  position: absolute;
  left: ${({ isLight }) => (isLight ? '0' : '50%')};

  width: 50%;
  height: 100%;
  border-radius: 5rem;

  background: ${({ theme }) => theme.fgColor};

  transition: all 0.25s ease-in-out;
`;

export default function ToggleButton() {
  const [isLight, setIsLight] = useState(true);
  const { dispatch } = useBreakBorednessContext();

  const clickHandler = () => {
    setIsLight(isLight => !isLight);
    dispatch({ type: 'MODE' });
  };

  return (
    <StyledToggleButton onClick={clickHandler}>
      <StyledGlider isLight={isLight} />
      <HiMoon />
      <HiOutlineSun />
    </StyledToggleButton>
  );
}
