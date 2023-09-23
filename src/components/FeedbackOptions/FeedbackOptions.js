import React from 'react';
export const FeedBackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {Object.keys(options).map((el, idx) => {
        return (
          <button key={idx} onClick={() => onLeaveFeedback(el)}>
            {el}
          </button>
        );
      })}
    </ul>
  );
};
