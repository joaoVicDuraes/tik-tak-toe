import React from "react";
import Button from "react-bootstrap/Button";

export default function Square({ value, onSquareClick }) {
  return (
    <Button
      variant="outline-light"
      className="square fw-bold fs-3"
      onClick={onSquareClick}
      style={{
        width: "80px",
        height: "80px",
        margin: "5px",
        backgroundColor: "#1e1e1e",
        color: value === "X" ? "#90caf9" : "#f48fb1",
        borderColor: "#444",
      }}
    >
      {value}
    </Button>
  );
}
