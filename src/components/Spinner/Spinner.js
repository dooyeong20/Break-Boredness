import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { rotate } from 'src/styles';
import styled from 'styled-components';

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
