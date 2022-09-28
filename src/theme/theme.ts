import { createTheme } from '@mui/material/styles';
import { blue, green, red } from '@mui/material/colors';
import colors from './variables';

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colors.provincial_pink[500],
      dark: 'orange',
    },
    secondary: {
      main: colors.hint_of_yellow[500],
      dark: 'orange'
    },
    error: {
      main: red.A400,
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
    background: {
      paper: '#fff',
      default: '#fff'
    },
    text: {
      primary: '#000',
      secondary: '#000'
    }
  }
});

export default theme;