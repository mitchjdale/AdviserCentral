import { createTheme } from '@mui/material/styles';

/**
 * Central theme for Adviser Central.
 * Blue primary, green success, clean SaaS analytics styling.
 */
export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1e5eff',
      dark: '#1544c4',
      light: '#5a86ff',
    },
    success: {
      main: '#12b76a',
      dark: '#0e935a',
      light: '#32d583',
    },
    background: {
      default: '#f6f8fc',
      paper: '#ffffff',
    },
    text: {
      primary: '#101828',
      secondary: '#667085',
    },
    divider: '#eaecf0',
  },
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily:
      '"Inter", "Segoe UI", -apple-system, BlinkMacSystemFont, "Roboto", "Helvetica Neue", Arial, sans-serif',
    h4: { fontWeight: 700, letterSpacing: '-0.02em' },
    h5: { fontWeight: 700, letterSpacing: '-0.01em' },
    h6: { fontWeight: 600 },
    subtitle1: { color: '#667085' },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiCard: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          border: '1px solid #eaecf0',
          borderRadius: 16,
          boxShadow: '0 1px 2px rgba(16, 24, 40, 0.04), 0 1px 3px rgba(16, 24, 40, 0.06)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 10 },
      },
    },
  },
});
