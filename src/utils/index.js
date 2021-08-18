import React from 'react';
export const getLinebreakedSpans = words =>
  words.map(word => (
    <span className="block" key={word + Math.floor(Math.random() * 1000)}>
      {word}
    </span>
  ));
