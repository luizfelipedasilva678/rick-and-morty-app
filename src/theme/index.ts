import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: 'inherit',
  },
  palette: {
    background: {
      default: '#13293D',
    },
    primary: {
      main: '#13293D',
      '100': '#97ce4c',
      light: '#fff',
    },
    text: {
      primary: '#fff',
    },
  },
});
