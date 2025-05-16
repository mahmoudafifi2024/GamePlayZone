// cmd: src/App.tsx
import { useState } from 'react';
import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import { getTheme } from './theme';
import NavBar from './Components/Utility/NavBar';
import Slider from './Components/Home/Slider';

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const theme = getTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Container >
      </Container>
      <NavBar mode={mode} toggleTheme={toggleTheme} />
      <Slider />


    </ThemeProvider>
  );
}

export default App;
