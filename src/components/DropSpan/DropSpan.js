import React from 'react';
import { drop } from 'src/styles';
import styled from 'styled-components';

const StyledDropSpan = styled.span`
  vertical-align: bottom;
  display: inline-block;
  overflow: hidden;

  span {
    font-weight: bold;
    display: inline-block;
    animation: ${drop} 0.4s ease-in-out;
  }
`;

export default function DropSpan({ children, big }) {
  return (
    <StyledDropSpan>
      <span className={big && 'big'}>{children}</span>
    </StyledDropSpan>
  );
}
