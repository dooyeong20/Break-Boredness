import React from 'react';
import {
  Content,
  Footer,
  Header,
  Result,
  TypeBar,
  TypeBox,
} from 'src/components';
import { useBreakBorednessContext } from 'src/contexts';
import { activityTypes } from 'src/globalVars';
import { theme } from 'src/styles';
import { getLinebreakedSpans } from 'src/utils';
import styled, { ThemeProvider } from 'styled-components';
import { ToggleButton } from 'src/components';

const StyledAppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  width: 100%;
  height: 100vh;

  background: #495057;
`;

const ScrollBarHiddenBox = styled.div`
  position: relative;
  width: 85%;
  min-width: 270px;
  border-radius: 20px;

  overflow: hidden;
  box-shadow: 2px 5px 30px 0 rgba(0, 0, 0, 0.7);
`;

const StyledApp = styled.section`
  @media screen and (min-height: 630px) {
    position: relative;
    height: auto;
  }
  box-sizing: content-box;
  padding-right: 2rem;
  overflow-y: scroll;
  overflow-y: overlay;
  width: 100%;
  height: 100%;

  background: ${({ theme }) => theme.fgColor};
`;

export default function BreakBoredness() {
  const {
    state: { isLoading, result, mode },
  } = useBreakBorednessContext();

  return (
    <ThemeProvider theme={theme[mode]}>
      <StyledAppContainer>
        <ScrollBarHiddenBox>
          {(isLoading || result) && <Result />}
          <ToggleButton mode={['light', 'dark']} />
          <StyledApp>
            <Header>{getLinebreakedSpans(['break', 'boredness'])}</Header>
            <Content />
            <TypeBar />
            <TypeBox types={activityTypes} />
            <Footer />
          </StyledApp>
        </ScrollBarHiddenBox>
      </StyledAppContainer>
    </ThemeProvider>
  );
}
