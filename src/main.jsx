import * as React from 'react'
import { ChakraProvider,theme } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import App from './App';
import ColorModeSwitcher from './ColourModeSwitcher';

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher/>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)