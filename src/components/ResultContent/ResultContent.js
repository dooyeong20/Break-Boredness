import React from 'react';
import { FaUserFriends } from 'react-icons/fa';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { useBreakBorednessContext } from 'src/contexts';
import { activityTypes } from 'src/globalVars';
import { slideUp } from 'src/styles';
import { getParticipantsText, getPriceText } from 'src/utils';
import styled from 'styled-components';

const StyledResultContent = styled.section`
  position: absolute;
  text-align: center;
  z-index: 1;

  width: 19rem;
  border-radius: 10px;

  color: ${({ theme }) => theme.bgColor};
  background: ${({ theme }) => theme.fgColor};
  box-shadow: 0 0 5px 0 rgba(255, 255, 255, 0.4);

  animation: ${slideUp} 0.6s ease-in-out;

  h3 {
    margin-top: 2rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;

    svg {
      font-size: 6rem;
      fill: ${({ theme }) => theme.bgColor};
    }
  }

  span {
    font-size: 1.4rem;
    display: inline-block;
    width: 100%;
  }

  button {
    position: absolute;
    color: ${({ theme }) => theme.fgColor};
    bottom: 1rem;
    left: 50%;
    transform: translate(-50%, 0);
    text-transform: uppercase;
    padding: 1rem 2rem;

    background: ${({ theme }) => theme.bgColor};
    border-radius: 5px;

    cursor: pointer;
    transition: all 0.1s ease-in-out;

    box-shadow: 1px 1px 0.3rem 0 rgba(0, 0, 0, 0.6);

    &:hover {
      background: ${({ theme }) => theme.bgColor};
      transform: translate(-50%, 0) scale(105%);
    }

    &:active {
      background: ${({ theme }) => theme.bgColor};
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

  const SVG = activityTypes.find(({ title }) => title === category).SVG;

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
