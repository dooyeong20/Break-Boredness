import React from 'react';
import { GlobalStyle } from 'src/globalVars';
import { theme } from 'src/styles/theme';
import { ThemeProvider } from 'styled-components';
import BreakBoredness from '../components/BreakBoredness/BreakBoredness';
import { BreakBorednessContextProvider } from '../contexts/BreakBorednessContext';

export default function App() {
  return (
    <ThemeProvider theme={theme.main}>
      <GlobalStyle />
      <BreakBorednessContextProvider>
        <BreakBoredness />
      </BreakBorednessContextProvider>
    </ThemeProvider>
  );
}
