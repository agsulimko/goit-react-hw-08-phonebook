// theme-file.js

import { createTheme } from '@mui/material/styles';

// Define your custom theme
export const theme = createTheme({
  palette: {
    mode: 'light', //"light" or "dark" for dark mode
    primary: {
      main: '#007FFF', // primary color
    },
    secondary: {
      main: '#FF4081',
      // main: '#FF4081',
      // secondary color
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif", // specify your preferred font family
  },
});
