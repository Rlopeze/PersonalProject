import React from "react";

import {
  Toolbar,
  AppBar,
  Typography,
  Box,
  Button,
  ThemeProvider,
  createTheme
} from "@mui/material";

export type NavBarProps = {};

const darkTheme = createTheme({
	palette: {
	  mode: 'dark',
	  primary: {
		main: '#1976d2',
	  },
	},
  });
  

const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              RSHOP
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};

export default NavBar;
