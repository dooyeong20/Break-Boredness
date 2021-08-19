import React from 'react';
import styled from 'styled-components';
import FooterItem from '../FooterItem/FooterItem';
import { FOOTER_ITEMS } from 'src/globalVars';

const StyledFooter = styled.footer.attrs(({ theme }) => {
  const { fgColor, bgColor, textColor } = theme;
  return {
    $fgColor: fgColor,
    $bgColor: bgColor,
    $textColor: textColor,
  };
})`
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
      {FOOTER_ITEMS.map(item => (
        <FooterItem key={item.id} item={item} />
      ))}
    </StyledFooter>
  );
}
