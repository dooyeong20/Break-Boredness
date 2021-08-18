import React from 'react';
import { GlobalStyle } from 'src/globalVars';
import { theme } from 'src/styles/theme';
import styled, { ThemeProvider } from 'styled-components';
import Content from '../components/Content/Content';
import Header from '../components/Header/Header';
import TypeBar from '../components/TypeBar/TypeBar';
import TypeBox from '../components/TypeBox/TypeBox';
import { getLinebreakedSpans } from '../utils';
import { ACTIVITY_TYPES } from 'src/globalVars';

const StyledAppContainer = styled.div.attrs(({ theme }) => {
  const { bgColor } = theme;

  return {
    $bgColor: bgColor,
  };
})`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  background: ${({ $bgColor }) => $bgColor};
`;

const StyledApp = styled.section.attrs(({ theme }) => {
  const { fgColor, bgColor } = theme;
  return {
    $fgColor: bgColor,
    $bgColor: fgColor,
  };
})`
  width: 85%;
  height: 90%;

  border-radius: 20px;
  background: ${({ $bgColor }) => $bgColor};
  box-shadow: 2px 5px 30px 0 rgba(0, 0, 0, 1);
`;

export default function App() {
  return (
    <ThemeProvider theme={theme.main}>
      <GlobalStyle />
      <StyledAppContainer>
        <StyledApp>
          <Header>{getLinebreakedSpans(['break', 'boredness'])}</Header>
          <Content />
          <TypeBar />
          <TypeBox types={ACTIVITY_TYPES} />
        </StyledApp>
      </StyledAppContainer>
    </ThemeProvider>
  );
}
