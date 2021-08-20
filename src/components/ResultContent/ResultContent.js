import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useBreakBorednessContext } from 'src/contexts/BreakBorednessContext';
import { ACTIVITY_TYPES } from 'src/globalVars';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { FaUserFriends } from 'react-icons/fa';
import { getParticipantsText, getPriceText } from 'src/utils';

const slideUp = keyframes`
  from {
    transform: translate(0, 200%);
  }

  to {
    transform: translate(0, 0);
  }
`;

const StyledResultContent = styled.section`
  position: absolute;
  text-align: center;
  z-index: 1;

  width: 19rem;
  border-radius: 10px;

  color: ${({ theme }) => theme.textColor};
  background: #f8f9fa;
  box-shadow: 0 0 2rem 0 rgba(255, 255, 255, 0.4);

  animation: ${slideUp} 0.6s ease-in-out;

  h3 {
    margin-top: 2rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;

    svg {
      font-size: 6rem;
      fill: #343a40;
    }
  }

  span {
    font-size: 1.4rem;
    display: inline-block;
    width: 100%;
  }

  button {
    position: absolute;
    color: #f8f9fa;
    bottom: 1rem;
    left: 50%;
    transform: translate(-50%, 0);
    text-transform: uppercase;
    padding: 1rem 2rem;

    background: #343a40;
    border-radius: 5px;

    cursor: pointer;
    transition: all 0.1s ease-in-out;

    box-shadow: 1px 1px 0.3rem 0 rgba(0, 0, 0, 0.6);

    &:hover {
      background: #495057;
      transform: translate(-50%, 0) scale(105%);
    }

    &:active {
      background: #343a40;
      transform: translate(-50%, 0) scale(100%);
    }
  }

  svg {
    font-size: 2rem;
    vertical-align: bottom;
  }

  .content {
    width: 60%;
    margin: auto;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .result-line {
    position: relative;
    overflow: hidden;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .activity {
    margin: auto;
    margin-top: 3rem;
    margin-bottom: 7rem;
    width: 80%;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

export default function ResultContent({
  result: { activity, price, participants },
}) {
  const {
    state: { category },
    dispatch,
  } = useBreakBorednessContext();

  const SVG = ACTIVITY_TYPES.find(({ title }) => title === category).SVG;

  const clickHandler = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <StyledResultContent>
      <h3>
        <SVG />
      </h3>
      <div className="content">
        <span className="result-line" title="Price">
          <RiMoneyDollarCircleLine />
          {getPriceText(price)}
        </span>
        <span className="result-line" title="Participants">
          <FaUserFriends />
          {getParticipantsText(participants)}
        </span>
      </div>
      <p className="activity">{activity}</p>
      <button onClick={clickHandler}>home</button>
    </StyledResultContent>
  );
}
