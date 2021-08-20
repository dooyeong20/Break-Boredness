import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useBreakBorednessContext } from 'src/contexts/BreakBorednessContext';
import Spinner from 'src/components/Spinner/Spinner';
import ResultContent from 'src/components/ResultContent/ResultContent';

const StyledResultBackground = styled.div`
  position: absolute;
  z-index: 1;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.8);
`;

export default function Result() {
  const {
    state: { isLoading, result },
  } = useBreakBorednessContext();

  return (
    <StyledResultBackground>
      {isLoading ? <Spinner /> : <ResultContent result={result} />}
    </StyledResultBackground>
  );
}
