import './App.css'
import { useState } from 'react'
import styled from 'styled-components'
import Menu from './Components/Menu.jsx'
import Navbar from './Components/Navbar.jsx'
import { DarkTheme, LightTheme } from './utils/Theme.jsx'
import { ThemeProvider } from 'styled-components'
import Home from './pages/Home.jsx'
import Video from './pages/Video.jsx'
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
} from "react-router-dom";
function App() {
  const Container = styled.div`
  display: flex;  
  `
  const Main = styled.div`
    flex: 7;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.secondary};
    `
  const Wrappper = styled.div`
    `
    const [theme, setTheme] = useState(true)
  return (
    <ThemeProvider theme={theme ? DarkTheme : LightTheme}>
    <Container>
    <BrowserRouter>
      <Menu theme={theme} setTheme={setTheme} />
      <Main>
        <Navbar />
        <Wrappper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video" element={<Video />} />
        </Routes>
        </Wrappper>
      </Main>
      </BrowserRouter>
    </Container>
    </ThemeProvider>
  )
}

export default App
