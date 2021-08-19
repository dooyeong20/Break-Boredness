import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useBreakBorednessContext } from 'src/contexts/BreakBorednessContext';
import DropSpan from '../DropSpan/DropSpan';

const StyledContent = styled.section.attrs(({ theme }) => {
  const { textColor } = theme;
  return {
    $textColor: textColor,
  };
})`
  color: ${({ $textColor }) => $textColor};

  margin-top: 3rem;

  text-align: center;
  font-size: 0.8rem;
  letter-spacing: 0.2rem;
  line-height: 200%;
  text-transform: uppercase;

  .big {
    font-size: 1.3rem;
    font-weight: bold;
  }
`;

export default function Content() {
  const { context } = useBreakBorednessContext();
  const { category } = context.state;

  return (
    <StyledContent>
      <span> fill your </span>
      <span className="big"> spare time</span>
      <span> with some </span>
      <br />
      <DropSpan key={category} big>
        {category}
      </DropSpan>
      <span> activities </span>
    </StyledContent>
  );
}
