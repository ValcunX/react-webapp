import { createMuiTheme } from '@material-ui/core/styles'
import baseStyle from './styles/base.scss'

console.log(baseStyle.primary)

export const theme = createMuiTheme({
  palette: {
    primary: { main: '#1C1C1E' },
    secondary: { main: '#007AFF' },
  }
})