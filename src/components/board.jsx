import React from "react";
import Square from "./Square";
import { Grid, Typography } from "@mui/material";

export default function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) return;

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status = winner
    ? `🎉 Vencedor: ${winner}`
    : `👉 Próximo jogador: ${xIsNext ? "X" : "O"}`;

  return (
    <div>
      <Typography variant="h5" gutterBottom>{status}</Typography>
      <Grid container justifyContent="center">
        {[0, 3, 6].map((row) => (
          <Grid key={row} item xs={12}>
            <Square value={squares[row]} onSquareClick={() => handleClick(row)} />
            <Square value={squares[row + 1]} onSquareClick={() => handleClick(row + 1)} />
            <Square value={squares[row + 2]} onSquareClick={() => handleClick(row + 2)} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

function calculateWinner(squares) {
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
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
