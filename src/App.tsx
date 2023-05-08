import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { BrowserRouter } from "react-router-dom"
import Router from "./Router"
import { useDataContext } from "./context/DataContext"
import { darkTheme } from "./styles/themes/dark"

function App() {
  const { isDarkMode } = useDataContext()

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
