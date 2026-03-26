import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function Box({ value, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: '100px',
        height: '100px',
        fontSize: '2rem',
        fontWeight: 'bold',
        border: '1px solid black',
        cursor: 'pointer',
        backgroundColor: 'white'
      }}
    >
      {value}
    </button>
  );
}

function Row({ row, rowIndex, onBoxClick }) {
  return (
    <div style={{ display: 'flex' }}>
      {row.map((value, colIndex) => (
        <Box
          key={colIndex}
          value={value}
          onClick={() => onBoxClick(rowIndex, colIndex)}
        />
      ))}
    </div>
  );
}

function Board() {
  const [board, setBoard] = useState([
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']
  ]);

  const handleBoxClick = (rowIndex, colIndex) => {
    setBoard((prevBoard) => {
      const newBoard = prevBoard.map((row) => [...row]);

      if (newBoard[rowIndex][colIndex] === '-') {
        newBoard[rowIndex][colIndex] = 'X';
      } else if (newBoard[rowIndex][colIndex] === 'X') {
        newBoard[rowIndex][colIndex] = 'O';
      } else {
        newBoard[rowIndex][colIndex] = 'X';
      }

      return newBoard;
    });
  };

  return (
    <div>
      <h1>Tic-Tac-Toe</h1>
      {board.map((row, rowIndex) => (
        <Row
          key={rowIndex}
          row={row}
          rowIndex={rowIndex}
          onBoxClick={handleBoxClick}
        />
      ))}
    </div>
  );
}

function App() {
  return <Board />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
