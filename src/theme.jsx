import { createTheme } from '@mui/material/styles'

// https://mui.com/material-ui/customization/default-theme/
const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: '#6b6b6b #2b2b2b',
          '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
            backgroundColor: '#2b2b2b',
          },
          '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            borderRadius: 8,
            backgroundColor: '#6b6b6b',
            minHeight: 24,
            border: '3px solid #2b2b2b',
          },
          '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus':
            {
              backgroundColor: '#959595',
            },
          '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active':
            {
              backgroundColor: '#959595',
            },
          '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover':
            {
              backgroundColor: '#959595',
            },
          '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
            backgroundColor: '#2b2b2b',
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: 'rgb(150, 50, 25)',
    },
    secondary: {
      main: 'rgb(225, 175, 50)',
    },
    error: {
      main: 'rgb(200, 50, 50)',
    },
    warning: {
      main: 'rgb(100, 50, 100)',
    },
    info: {
      main: 'rgb(50, 100, 200)',
    },
    success: {
      main: 'rgb(50, 125, 50)',
    },
  },
  typography: {
    // https://mui.com/material-ui/customization/typography/
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      'system-ui',
    ].join(','),
    body1: {
      fontFamily: ['Pirata One', 'Lugrasimo', 'serif', 'system-ui'].join(','),
      fontSize: '1.2rem',
    },
    h1: {
      fontFamily: ['Pirata One', 'Lugrasimo', 'serif', 'system-ui'].join(','),
    },
    h2: {
      fontFamily: ['Pirata One', 'Lugrasimo', 'serif', 'system-ui'].join(','),
    },
    h3: {
      fontFamily: ['Pirata One', 'Lugrasimo', 'serif', 'system-ui'].join(','),
    },
    h4: {
      fontFamily: ['Pirata One', 'Lugrasimo', 'serif', 'system-ui'].join(','),
    },
    h5: {
      fontFamily: ['Pirata One', 'Lugrasimo', 'serif', 'system-ui'].join(','),
    },
    button: {
      fontFamily: ['Pirata One', 'Lugrasimo', 'serif', 'system-ui'].join(','),
      fontSize: '1.2rem',
      letterSpacing: '0.15em',
    },
  },
})

export { theme }
