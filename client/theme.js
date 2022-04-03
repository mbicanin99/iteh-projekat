import { createMuiTheme } from '@material-ui/core/styles'
import { red, brown } from '@material-ui/core/colors'

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: {
        light: '#f05545',
        main: '#A9A9A9',
        dark: '#7f0000',
        contrastText: '#fff',
      },
      secondary: {
        light: '#fbfffc',
        main: '#301934',
        dark: '#97b498',
        contrastText: '#37474f',
      },
        openTitle: red['500'],
        protectedTitle: brown['300'],
        type: 'light'
      },
    })

  export default theme