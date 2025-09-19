import React from "react";
import Game from "./components/Game";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Container, Typography, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Tema escuro
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container className="text-center mt-4">
        <Typography variant="h3" gutterBottom color="primary">
          <i className="bi bi-grid-3x3-gap-fill"></i> Jogo da Velha
        </Typography>
        <Game />
      </Container>
    </ThemeProvider>
  );
}
