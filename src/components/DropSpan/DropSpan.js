import React from 'react';
import styled, { keyframes } from 'styled-components';

const drop = keyframes`
  from {
    transform: translate(0, -150%);
  }

  to {
    transform: translate(0, 0);
  }
`;

const StyledDropSpan = styled.span`
  vertical-align: bottom;
  display: inline-block;
  overflow: hidden;

  span {
    font-weight: bold;
    display: inline-block;
    animation: ${drop} 0.3s ease-in-out;
  }
`;

export default function DropSpan({ children, big }) {
  return (
    <StyledDropSpan>
      <span className={big && 'big'}>{children}</span>
    </StyledDropSpan>
  );
}
