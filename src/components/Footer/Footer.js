import React from 'react';
import { footerItems } from 'src/globalVars';
import styled from 'styled-components';
import { FooterItem } from 'src/components';

const StyledFooter = styled.footer`
  width: 100%;
  height: 4rem;
  padding: 5rem 0;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default function Footer() {
  return (
    <StyledFooter>
      {footerItems.map(item => (
        <FooterItem key={item.id} item={item} />
      ))}
    </StyledFooter>
  );
}
