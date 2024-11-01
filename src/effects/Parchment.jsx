import { useMemo } from 'react'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'

const getParchmentSvg = () => {
  const baseSeed = (Math.random() * 500 + 500).toFixed(3)
  const textureSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <mask id="mask">
          <path d="M0,0 L100,10 L100,90 L0,100 Z" fill="white" />
        </mask>
        <linearGradient id="gradient" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#fffce0;stop-opacity:0.75" />
          <stop offset="100%" style="stop-color:#b89f74;stop-opacity:0.5" />
        </linearGradient>
        <linearGradient id="gradientTop" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="90%" style="stop-color:#fffce0;stop-opacity:0" />
          <stop offset="100%" style="stop-color:#b89f74;stop-opacity:0.5" />
        </linearGradient>
        <linearGradient id="gradientBottom" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="90%" style="stop-color:#fffce0;stop-opacity:0" />
          <stop offset="100%" style="stop-color:#b89f74;stop-opacity:0.5" />
          </linearGradient>
          <linearGradient id="gradientLeft" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="90%" style="stop-color:#fffce0;stop-opacity:0" />
          <stop offset="100%" style="stop-color:#b89f74;stop-opacity:0.5" />
          </linearGradient>
          <linearGradient id="gradientRight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="90%" style="stop-color:#fffce0;stop-opacity:0" />
          <stop offset="100%" style="stop-color:#b89f74;stop-opacity:0.5" />
        </linearGradient>
        <filter id="speckles">
          <feTurbulence baseFrequency="0.3" result="pageTurbulence" numOctaves="20" seed="${baseSeed}" />
          <feComposite operator="in" in="pageTurbulence" in2="SourceAlpha" result="pageComposite"/>
          <feColorMatrix in="pageComposite" type="matrix"
          values="0   0   0   0   0.6
                  0   0   0   0   0.4
                  0   0   0   0   0.2
                  0.5 0   0   0   0.1" />
        </filter>
        <filter id="blotches">
          <feTurbulence baseFrequency="0.01" result="pageTurbulence" numOctaves="5" seed="${baseSeed}" />
          <feComposite operator="in" in="pageTurbulence" in2="SourceAlpha" result="pageComposite"/>
          <feColorMatrix in="pageComposite" type="matrix"
          values="0   0   0   0   0.6
                  0   0   0   0   0.6
                  0   0   0   0   0
                  0   0   0   0.5 0.1" />
        </filter>
      </defs>
      <rect width="100%" height="100%" fill="white" />
      <rect width="100%" height="100%" filter="url(#blotches)" opacity="0.6" />
      <rect width="100%" height="100%" filter="url(#speckles)" opacity="0.8" />
      <rect width="100%" height="100%" fill="url(#gradientTop)" opacity="0.7" />
      <rect width="100%" height="100%" fill="url(#gradientBottom)" opacity="0.7" />
      <rect width="100%" height="100%" fill="url(#gradientLeft)" opacity="0.7" />
      <rect width="100%" height="100%" fill="url(#gradientRight)" opacity="0.7" />
      <rect width="100%" height="100%" fill="url(#gradient)" opacity="0.7" />
    </svg>
  `
  return textureSvg
}

const encodedSvg = `url("data:image/svg+xml,${encodeURIComponent(getParchmentSvg())}")`

const ParchmentStyle = styled(Paper)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  height: '100%',
  padding: '80px',
  background: useMemo(() => encodedSvg, []),
  borderRadius: theme.shape.borderRadius,
}))

const Parchment = ({ children }) => {
  return useMemo(() => <ParchmentStyle>{children}</ParchmentStyle>, [children])
}

export { Parchment }
