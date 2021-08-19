import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h1.attrs(({ theme }) => {
  const { textColor } = theme;
  return {
    $textColor: textColor,
  };
})`
  font-size: 1.7rem;
  letter-spacing: 0.3rem;
  line-height: 130%;
  text-align: center;

  margin-top: 4rem;
  color: ${({ $textColor }) => $textColor};

  text-transform: uppercase;
`;
export default function Header({ ...restProps }) {
  return <StyledHeader {...restProps}></StyledHeader>;
}
