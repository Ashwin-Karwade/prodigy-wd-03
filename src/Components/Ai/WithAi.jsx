import React, { useState } from 'react';
import './WithAi.css';
import { NavLink } from 'react-router-dom';


const Player = {
  HUMAN: 'X',
  AI: 'O',
};

const initialBoard = Array(9).fill(null); // 3x3 grid

const WithAi = () => {

   document.body.style.background = "black"

  const [board, setBoard] = useState(initialBoard);
  const [isGameOver, setIsGameOver] = useState(false);
  const [winner, setWinner] = useState(null);

  const checkWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return board.includes(null) ? null : 'Tie';
  };

  const handleClick = (index) => {
    if (board[index] || isGameOver) return;

    const newBoard = [...board];
    newBoard[index] = Player.HUMAN;
    setBoard(newBoard);

    const winner = checkWinner(newBoard);
    if (winner) {
      setWinner(winner);
      setIsGameOver(true);
      return;
    }

    // AI's turn
    setTimeout(() => {
      aiMove(newBoard);
    }, 500);
  };

  const aiMove = (board) => {
    let availableMoves = board.map((value, index) => value === null ? index : null).filter(value => value !== null);
    if (availableMoves.length === 0) return;

    const randomMove = availableMoves[Math.floor(Math.random() * availableMoves.length)];
    const newBoard = [...board];
    newBoard[randomMove] = Player.AI;

    setBoard(newBoard);
    const winner = checkWinner(newBoard);
    if (winner) {
      setWinner(winner);
      setIsGameOver(true);
    }
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setIsGameOver(false);
    setWinner(null);
  };

  const getwinerData =()=>{
    if(winner === "X"){
      return "Congrats you'r a Winner !!"
    }
    if(winner === "O"){
      return " Ai Is a Winner !!"
    }
    if(winner === "Tie"){
      return "Oopp's Its a Tie !!"
    }
  }

  return (
    <div className="game">
      <h1 className='heading font-bold font-sans'>Tic Tac Toe Game With  <span className='AiHeading'>AI</span> !!</h1>
      <div className="board">
        {board.map((cell, index) => (
          <div
            key={index}
            className="cell"
            onClick={() => handleClick(index)}
          >
            {cell}
          </div>
        ))}
        

      </div>
      {isGameOver && (
        <div className="game-over">
          {getwinerData()}
        </div>
      )}
      <button className='btnRestart font-semibold font-sans' onClick={resetGame}>Restart</button>
       <NavLink to='/prodigy-wd-03/' className='btnBack font-semibold font-snas'>Back</NavLink>  
         
    
    </div>
  );
};

export default WithAi;
