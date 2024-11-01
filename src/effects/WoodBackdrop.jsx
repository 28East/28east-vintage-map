import React from 'react'
import { styled } from '@mui/material/styles'
import { Box, Paper } from '@mui/material'

const generateWoodGrainSvg = () => {
  const baseFrequencyX = (Math.random() * 0.6 + 0.2).toFixed(3)
  const baseFrequencyY = (Math.random() * 0.04 + 0.01).toFixed(3)
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
      <defs>
        <filter id="woodTexture" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="${baseFrequencyX} ${baseFrequencyY}" numOctaves="3" result="texture" />
          <feColorMatrix in="texture" result="desatTexture"
          type="matrix" values="0.6 0.25 0.15 0 0.2
                                0.4 0.3 0.2 0 0.15
                                0.2 0.2 0.2 0 0.1
                                0   0   0   1 0" />
          <feOffset in="desatTexture" result="shadow" dx="1" dy="-3" />
          <feBlend in="desatTexture" in2="shadow" result="texture2" mode="multiply" />
          <feBlend in="SourceGraphic" in2="texture2" mode="multiply" result="colorTexture" />
          <feConvolveMatrix order="3" edgeMode="wrap" kernelMatrix="-5 -2 5 -2 5 -2 5 -2 -5" />
          <feComposite in2="SourceAlpha" operator="in" />
        </filter>
      </defs>
      <rect width="600" height="600" fill="burlywood" filter="url(#woodTexture)"/>
    </svg>
  `
  return svg
}
const encodedSvg = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(generateWoodGrainSvg())}`

const WoodBackdropStyle = styled(Paper)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  width: '100vw',
  height: '100vh',
  padding: 0,
  margin: 0,
  backgroundImage: `url("${encodedSvg}")`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))
const WoodBackdrop = ({ children }) => (
  <WoodBackdropStyle>
    <Box sx={{ width: '95%' }}>{children}</Box>
  </WoodBackdropStyle>
)

export { WoodBackdrop }
