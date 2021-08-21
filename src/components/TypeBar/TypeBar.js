import React from 'react';
import { useBreakBorednessContext } from 'src/contexts';
import { getRandomActivity } from 'src/utils';
import styled from 'styled-components';
import { DropSpan } from 'src/components';

const StyledTypeBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.bgColor};

  margin-top: 3.5rem;
  height: 3.1rem;

  @media screen and (min-width: 560px) {
    height: 2.3rem;
  }
`;

const StyledTypeSelectButton = styled.button`
  padding: 0 1rem;
  font-size: 0.8rem;
  letter-spacing: 0.2rem;
  height: 70%;

  color: ${({ theme }) => theme.bgColor};
  background: ${({ theme }) => theme.fgColor};
  border-radius: 40px;

  text-transform: uppercase;

  cursor: pointer;
  transition: all 0.05s ease-in-out;

  box-shadow: 1px 1px 8px 0 rgba(0, 0, 0, 0.3);

  &:hover {
    transform: scale(103%);
  }

  &:active {
    transform: scale(100%);
  }
  width: 80%;

  @media screen and (min-width: 750px) {
    width: 30rem;
  }
`;

export default function TypeBar() {
  const {
    state: { category },
    dispatch,
  } = useBreakBorednessContext();

  const clickHandler = e => {
    dispatch({ type: 'ISLOADING', isLoading: true });
    getRandomActivity(category).then(
      ({ activity, type, participants, price, link }) =>
        dispatch({
          type: 'RESULT',
          result: { activity, type, participants, price, link },
        })
    );
  };

  return (
    <StyledTypeBar>
      <StyledTypeSelectButton onClick={clickHandler}>
        <span>check out</span> <DropSpan key={category}>{category}</DropSpan>{' '}
        <span>activity</span>
      </StyledTypeSelectButton>
    </StyledTypeBar>
  );
}
