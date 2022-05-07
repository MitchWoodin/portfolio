import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import NavBar from './components/NavBar';
import LandingPage from './containers/LandingPage';
import { Container } from '@mui/material';

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
    <div>
      <ThemeProvider theme={theme} sx={{
        align: "center",
        bgcolor: "background.default",
        // display: "flex",
        // flexDirection: "column"
      }}>
          <NavBar />
          <Router>
            <Routes>
              <Route path="/portfolio" element={<LandingPage />} />
            </Routes>
          </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
