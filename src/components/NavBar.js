import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';


const NavBar = () => {  
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="sticky"
        elevation={0}
        sx={{bgcolor: "background.default" }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Box sx={{ flexGrow: 1 }}/>
          <nav>
            <Link
              variant="button"
              underline="none"
              href="/"
              sx={{ my: 1, mx: 1.5, color: "primary.contrastText" }}
            >
              <strong>Home</strong>
            </Link>
            <Link
              variant="button"
              underline="none"
              href="/pricing"
              sx={{ my: 1, mx: 1.5, color: "primary.contrastText" }}
            >
              <strong>About Me</strong>
            </Link>
            <Link
              variant="button"
              underline="none"
              href="/login"
              sx={{ my: 1, mx: 1.5, color: "primary.contrastText" }}
            >
              <strong>Portfolio</strong>
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}

export default NavBar
