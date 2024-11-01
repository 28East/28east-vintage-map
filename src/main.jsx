import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { APIProvider } from '@vis.gl/react-google-maps'
import { useDetectAdBlock } from 'adblock-detect-react'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/pirata-one/400.css'
import '@fontsource/lugrasimo/400.css'
import { theme } from './theme.jsx'
import './index.css'
import { PaperEdge } from './effects/PaperEdge.jsx'
import { Parchment } from './effects/Parchment.jsx'
import { WoodBackdrop } from './effects/WoodBackdrop.jsx'
// import { reportWebVitals } from './utils/reportWebVitals.jsx'
import { Box, Paper } from '@mui/material'
import sealImage from './assets/seal.png'

const SealImage = () => (
  <img
    src={sealImage}
    alt="Seal"
    style={{
      position: 'fixed',
      bottom: '60px',
      right: '25px',
      width: '125px',
      height: '125px',
      zIndex: 1000,
    }}
  />
)

const RootComponent = () => {
  const adBlockDetected = useDetectAdBlock()
  if (adBlockDetected) {
    return (
      <>
        <WoodBackdrop>
          <Box>
            <PaperEdge>
              <Parchment>
                {'Please disable your Ad Blocker and reload the page...'}
              </Parchment>
            </PaperEdge>
          </Box>
        </WoodBackdrop>
        <SealImage />
      </>
    )
  } else {
    return (
      <>
        <WoodBackdrop>
          <Box>
            <PaperEdge elevation={5}>
              <Parchment>
                <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                  <RouterProvider router={router} />
                </APIProvider>
              </Parchment>
            </PaperEdge>
          </Box>
        </WoodBackdrop>
        <SealImage />
      </>
    )
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RootComponent />
    </ThemeProvider>
  </React.StrictMode>
)

// reportWebVitals(console.log)
