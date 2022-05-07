import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet
} from 'react-router-dom';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import NavBar from './components/NavBar';

const theme = createTheme({
  palette: {
    primary: {
      main: "#F66B0E", // Orange
      contrastText: "#fff"
    },
    secondary: {
      main: "#205375", // Light Blue
      dark: "#112B3C", // Dark Blue
      contrastText: "#FFF"
    },
    background: {
      default: "#282c34" // Dark Blue
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme} sx={{
      display: "flex",
      flexDirection: "column"
    }}>
      <NavBar />
      <Container>
        <h1>Mitchell Woodin</h1>
        <p>Portfolio Site</p>
      </Container>
    </ThemeProvider>
  );
}

export default App;
