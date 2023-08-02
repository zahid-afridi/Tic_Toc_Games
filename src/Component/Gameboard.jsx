import React, { useState } from 'react';
import Saqure from './Saqure';

export default function Gameboard() {
  const [state, setState] = useState(Array(9).fill(''));
  const [player, setPlayer] = useState(true);
  const [winner, setWinner] = useState(null);

  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  const handleClick = (index) => {
    if (state[index] !== '' || winner) {
      return;
    }

    const copystate = [...state];
    copystate[index] = player ? 'x' : 'o';
    setPlayer(!player);
    setState(copystate);

    checkWinner(copystate);
  };

  const checkWinner = (currentBoard) => {
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (
        currentBoard[a]==currentBoard[b] &&   currentBoard[a]==currentBoard[c] &&
        currentBoard[b]==currentBoard[c]
      
      ) {
        setWinner(currentBoard[a]);
        break;
      }
    }
  };

  return (
    <>
      <div className="gameboard">
        <div className="gamerow">
          <Saqure value={state[0]} onClick={() => handleClick(0)} />
          <Saqure value={state[1]} onClick={() => handleClick(1)} />
          <Saqure value={state[2]} onClick={() => handleClick(2)} />
        </div>
        <div className="gamerow">
          <Saqure value={state[3]} onClick={() => handleClick(3)} />
          <Saqure value={state[4]} onClick={() => handleClick(4)} />
          <Saqure value={state[5]} onClick={() => handleClick(5)} />
        </div>
        <div className="gamerow">
          <Saqure value={state[6]} onClick={() => handleClick(6)} />
          <Saqure value={state[7]} onClick={() => handleClick(7)} />
          <Saqure value={state[8]} onClick={() => handleClick(8)} />
        </div>
        
      </div>
      <h5 className="winner" >Winner is:  {winner}</h5>
    </>
  );
}
