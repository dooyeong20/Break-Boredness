import React from 'react';
import { useBreakBorednessContext } from 'src/contexts/BreakBorednessContext';
import { ACTIVITY_TYPES } from 'src/globalVars';
import Result from 'src/Result/Result';
import styled from 'styled-components';
import { getLinebreakedSpans } from '../../utils';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import TypeBar from '../TypeBar/TypeBar';
import TypeBox from '../TypeBox/TypeBox';

const StyledAppContainer = styled.div.attrs(({ theme }) => {
  const { bgColor } = theme;

  return {
    $bgColor: bgColor,
  };
})`
  position: relative;
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
  @media screen and (min-height: 630px) {
    position: relative;
    height: auto;
  }

  overflow: scroll;
  width: 85%;
  min-width: 270px;
  height: 90%;

  border-radius: 20px;
  background: ${({ $bgColor }) => $bgColor};
  box-shadow: 2px 5px 30px 0 rgba(0, 0, 0, 1);
`;

export default function BreakBoredness() {
  const {
    state: { isLoading, result },
  } = useBreakBorednessContext();

  return (
    <>
      <StyledAppContainer>
        {(isLoading || result) && <Result />}
        <StyledApp>
          <Header>{getLinebreakedSpans(['break', 'boredness'])}</Header>
          <Content />
          <TypeBar />
          <TypeBox types={ACTIVITY_TYPES} />
          <Footer />
        </StyledApp>
      </StyledAppContainer>
    </>
  );
}
