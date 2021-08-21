import React from 'react';
import { DropSpan } from 'src/components';
import { useBreakBorednessContext } from 'src/contexts';
import styled from 'styled-components';

const StyledContent = styled.section`
  color: ${({ theme }) => theme.bgColor};

  margin-top: 3rem;

  text-align: center;
  font-size: 0.8rem;
  letter-spacing: 0.2rem;
  line-height: 200%;
  text-transform: uppercase;

  .big {
    font-size: 1.3rem;
    font-weight: bold;
    color: ${({ theme }) => theme.bgColor};
  }
`;

export default function Content() {
  const {
    state: { category },
  } = useBreakBorednessContext();

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
