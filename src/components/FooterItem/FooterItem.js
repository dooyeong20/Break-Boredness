import React from 'react';
import styled from 'styled-components';

const StyledFooterItem = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 20%;
  box-sizing: content-box;
  padding: 0.3rem;

  color: ${({ theme }) => theme.bgColor};

  letter-spacing: 0.1rem;
  font-size: 0.8rem;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;

  transition: all 0.25s ease-in-out;

  svg {
    font-size: 5rem;
    fill: ${({ theme }) => theme.bgColor};
  }

  p {
    margin: 0;
    margin-top: 0.3rem;
    color: ${({ theme }) => theme.bgColor};
  }

  &:hover {
    transform: scale(110%);
  }
`;

export default function FooterItem({ item }) {
  const { title, link, SVG } = item;

  return (
    <StyledFooterItem href={(title === 'Mail' ? 'mailto: ' : '') + link}>
      <SVG />
      <p>{title}</p>
    </StyledFooterItem>
  );
}
