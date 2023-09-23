// import React, { Component } from 'react';
export const Statistics = ({ options, totalFeedback, positivePercentage }) => {
  return (
    <ul>
      {Object.keys(options).map((el, idx) => {
        return (
          <li key={idx}>
            {el}:{options[el]}
          </li>
        );
      })}
      <li>Total feedback: {totalFeedback}</li>
      <li>Positive feedback: {positivePercentage}</li>
    </ul>
  );
};

// render () {
//     const {todo} = this.StaticRange;
//     const completedTodos = todos.reduce((acc,todo) =>(todo.completed ? acc +1 : acc), 0);

//     return (
//         <>
//         </>
//     )
// }
