import { createGlobalStyle, ThemeProvider } from 'styled-components'
import db from '../db.json'

const theme = db.theme

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;

    color: ${theme.colors.contrastText};
  }
`


export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
