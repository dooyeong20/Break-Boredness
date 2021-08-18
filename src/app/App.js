import React from 'react';
import styled from 'styled-components';

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50%;
  min-width: 450px;
  height: 30vh;

  margin: auto;
  margin-top: 50vh;
  transform: translate(0, -50%);

  background: #f8f0fc;
  color: #da77f2;

  border-radius: 20px;

  font-size: 4rem;
  font-weight: bold;
`;

export default function App() {
  return <StyledApp>Hello React !!!</StyledApp>;
}
