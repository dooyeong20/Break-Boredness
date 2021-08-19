import axios from 'axios';
import React from 'react';
import { END_POINT } from 'src/globalVars';

export const getLinebreakedSpans = words =>
  words.map(word => (
    <span className="block" key={word + Math.floor(Math.random() * 1000)}>
      {word}
    </span>
  ));

export const getRandomActivity = async (type = 'random') => {
  try {
    const { data } = await axios(
      `${END_POINT}${type !== 'random' ? type : ''}`
    );

    return data;
  } catch (error) {
    throw new Error('Network error:' + error.message);
  }
};
