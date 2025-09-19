import React, { useState } from "react";
import Board from "./board";
import { ListGroup, Button } from "react-bootstrap";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description = move > 0 ? `Ir para jogada #${move}` : "Início do jogo";
    return (
      <ListGroup.Item key={move}>
        <Button variant="secondary" size="sm" onClick={() => jumpTo(move)}>
          {description}
        </Button>
      </ListGroup.Item>
    );
  });

  return (
    <div className="d-flex flex-column align-items-center">
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      <div className="mt-3 w-50">
        <h5>Histórico</h5>
        <ListGroup>{moves}</ListGroup>
      </div>
    </div>
  );
}
