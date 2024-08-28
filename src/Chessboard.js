import React, { useState } from 'react';
import './Chessboard.css';
import blackRook from './assets/Chess_rdt60.png';
import blackKnight from './assets/Chess_ndt60.png';
import blackBishop from './assets/Chess_bdt60.png';
import blackQueen from './assets/Chess_qdt60.png';
import blackKing from './assets/Chess_kdt60.png';
import blackPawn from './assets/Chess_pdt60.png';
import whiteRook from './assets/Chess_rlt60.png';
import whiteKnight from './assets/Chess_nlt60.png';
import whiteBishop from './assets/Chess_blt60.png';
import whiteQueen from './assets/Chess_qlt60.png';
import whiteKing from './assets/Chess_klt60.png';
import whitePawn from './assets/Chess_plt60.png';


const initialBoard = [
  ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
  ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
  ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
];

const pieceImages = {
  r: blackRook,
  n: blackKnight,
  b: blackBishop  ,
  q: blackQueen,
  k: blackKing,
  p: blackPawn,
  R: whiteRook,
  N: whiteKnight,
  B: whiteBishop,
  Q: whiteQueen,
  K: whiteKing,
  P: whitePawn,
};

const Chessboard = () => {
  const [board, setBoard] = useState(initialBoard);

  const renderSquare = (rowIdx, colIdx) => {
    const isDarkSquare = (rowIdx + colIdx) % 2 === 1;
    const piece = board[rowIdx][colIdx];

    return (
      <div
        key={`${rowIdx}-${colIdx}`}
        className={`square ${isDarkSquare ? 'dark' : 'light'}`}
      >
        {piece && <img src={pieceImages[piece]} alt={piece} className="piece" />}
      </div>
    );
  };

  const renderRow = (row, rowIdx) => {
    return (
      <div key={rowIdx} className="row">
        {row.map((_, colIdx) => renderSquare(rowIdx, colIdx))}
      </div>
    );
  };

  return (
    <div className="chessboard-container">
      <div className="chessboard">
        {board.map((row, rowIdx) => renderRow(row, rowIdx))}
      </div>
    </div>
  );
};

export default Chessboard;
