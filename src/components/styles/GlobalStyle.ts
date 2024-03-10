import { createGlobalStyle } from 'styled-components'
import { scrollbar, wh } from '~styles-components/_mixins'
import { FS, colors, sizes } from '~styles-components/_variables'

export const GlobalStyle = createGlobalStyle`
  html{
    height: ${sizes.full};
  }

  body {
    height: ${sizes.full};
    margin: 0;
    font-size: ${FS};
    background: linear-gradient(170deg, ${colors.bg_gradient[0]} 0%, ${colors.bg_gradient[1]} 50%, ${colors.bg_gradient[2]} 100%);
    background-repeat: no-repeat;
    background-attachment: fixed;
    ${scrollbar('7px', colors.scrollbar, 'transparent')}
    font-family: system,-apple-system,BlinkMacSystemFont,'Segoe UI',
      'Segoe WP',Roboto,Ubuntu,Oxygen,Cantarell,'Fira Sans','Helvetica Neue',Helvetica,
      'Lucida Grande','Droid Sans',Tahoma,'Microsoft Sans Serif',sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`
