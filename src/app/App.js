import React from 'react';
import { BreakBoredness } from 'src/components';
import { BreakBorednessContextProvider } from 'src/contexts';
import { GlobalStyle, theme } from 'src/styles';
import { ThemeProvider } from 'styled-components';

export default function App() {
  return (
    <ThemeProvider theme={theme.light}>
      <GlobalStyle />
      <BreakBorednessContextProvider>
        <BreakBoredness />
      </BreakBorednessContextProvider>
    </ThemeProvider>
  );
}
