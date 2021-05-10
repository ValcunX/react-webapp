import { createMuiTheme } from '@material-ui/core/styles'
import baseStyle from './styles/base.scss'

console.log(baseStyle.primary)

export const theme = createMuiTheme({
  palette: {
    primary: { 
      light: '#434345',
      main: '#1C1C1E',
      dark: '#000000',
      contrastText: '#FFFFFF'
    },
    secondary: { 
      light: '#69A8FF',
      main: '#007AFF',
      dark: '#004FCB',
      contrastText: '#FFFFFF'
    },
    error: { 
      main: '#FF3B30' 
    },
  }
})
