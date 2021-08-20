import React from 'react';
import styled, { keyframes } from 'styled-components';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
const rotate = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div`
  animation: ${rotate} 0.8s linear infinite;

  svg {
    fill: #f8f9fa;
    font-size: 3rem;
  }
`;

export default function Spinner() {
  return (
    <StyledSpinner>
      <AiOutlineLoading3Quarters />
    </StyledSpinner>
  );
}
