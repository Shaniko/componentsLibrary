// app/ThemeRegistry.tsx
'use client';
import React from 'react';
import { Experimental_CssVarsProvider as CssVarsProvider, experimental_extendTheme as extendTheme, useColorScheme, } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import { Button} from '@mui/material';
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
    <Button onClick={() => { setMode(mode === 'light' ? 'dark' : 'light'); }} > {mode === 'light' ? 'Turn dark' : 'Turn light'} </Button>
  );
}
// This implementation is from emotion-js
// https://github.com/emotion-js/emotion/issues/2928#issuecomment-1319747902
export default function ThemeRegistry(props) {
  const { options, children } = props;
  console.log( options.mode)

const theme = extendTheme({
    colorSchemes: {
      light: {
        palette: {
          primary: {
            main: pink[600],
          },
        },
      },
      dark: {
        palette: {
          primary: {
            main: pink[400],
          },
        },
      },
    },
  });
  return (
      <CssVarsProvider theme={theme} defaultMode="dark">
        {children}
        <ModeToggle/>
      </CssVarsProvider>
  );
}