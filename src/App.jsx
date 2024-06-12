import React from "react"
import { useState } from "react"
import './App.css'


function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}


export default function Board() {
  // const [xIsNext, setXIsNext] = useState(true);
  //is declared as a boolean.
  //When the function handleClick is called,
  //if xIsNext is true, the action performed
  //on the square is "X",
  // if not, is "O"
  // At the end of the function Board, setXIsNext
  //  (changes to its opposite)
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));


  //Function to handle a click event on the board
  function handleClick(i) {
    //Create a copy of the current squares array
    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    // This is a remainder
    // of a past initial action //Update the first square (index 0) to be "X"
    // nextSquares[i] = "X";

    //Update the state with the new squares array
    setSquares(nextSquares);
    setXIsNext(!xIsNext)
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}


