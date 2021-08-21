import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h1`
  font-size: 2rem;
  letter-spacing: 0.3rem;
  line-height: 130%;
  text-align: center;

  margin-top: 4rem;
  color: ${({ theme }) => theme.bgColor};

  text-transform: uppercase;
`;
export default function Header({ ...restProps }) {
  return <StyledHeader {...restProps}></StyledHeader>;
}
