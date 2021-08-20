import React from 'react';
import styled from 'styled-components';
import TypeItem from '../TypeItem/TypeItem';
import PropTypes from 'prop-types';

const ScrollHiddenBox = styled.div`
  width: 100%;
  overflow: hidden;
  height: 14rem;
`;

const StyledTypeScrollBox = styled.div`
  width: 100%;
  margin-top: 2rem;
  overflow-x: scroll;
  box-sizing: content-box;
  padding-bottom: 2rem;
`;

const StyledTypeBox = styled.div.attrs(({ theme, typeCount }) => {
  const { fgColor, bgColor, textColor } = theme;

  return {
    $fgColor: fgColor,
    $bgColor: bgColor,
    $textColor: textColor,
    $width: `${typeCount * 13}rem`,
  };
})`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: ${({ $width }) => $width};

  padding: 1rem 0;
  overflow-x: scroll;

  background: ${({ $bgColor }) => $bgColor}; ;
`;

export default function TypeBox({ types }) {
  return (
    <ScrollHiddenBox>
      <StyledTypeScrollBox>
        <StyledTypeBox typeCount={types.length}>
          {types.map(type => (
            <TypeItem key={type.title} category={type}></TypeItem>
          ))}
        </StyledTypeBox>
      </StyledTypeScrollBox>
    </ScrollHiddenBox>
  );
}

TypeBox.propTypes = {
  types: PropTypes.array,
};
