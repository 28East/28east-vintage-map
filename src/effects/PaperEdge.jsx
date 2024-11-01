import { useMemo } from 'react'
import { styled } from '@mui/material/styles'
import { randomInt, generateRandomFloatArray } from '../utils/generic'

/**
 * Generates a CSS polygon to use as a clipping path for paper-like edges.
 * This function follows the bounded object polygon edges and inserts a determinate
 * number of random points with a random offset (direction is determined by edge)
 * and bounded within a predefined offset range (css % value).
 *
 * @returns {string} The generated CSS polygon.
 */
function generateRandomEdgeNoise() {
  const config = {
    minEdgeOffset: 3, // css percentage value
    minEdgePoints: 2,
    maxEdgePoints: 10,
  }

  const [topLeft, topRight, bottomRight, bottomLeft] = [
    { x: 0, y: 0 },
    { x: 100, y: 0 },
    { x: 100, y: 100 },
    { x: 0, y: 100 },
  ]

  const edges = [
    {
      start: topLeft,
      end: topRight,
      offset: 'y',
      sign: 1,
      order: 'ascending',
    },
    {
      start: topRight,
      end: bottomRight,
      offset: 'x',
      sign: -1,
      order: 'ascending',
    },
    {
      start: bottomRight,
      end: bottomLeft,
      offset: 'y',
      sign: -1,
      order: 'descending',
    },
    {
      start: bottomLeft,
      end: topLeft,
      offset: 'x',
      sign: 1,
      order: 'descending',
    },
  ]

  let polygon = 'polygon('

  edges.forEach((edge, i) => {
    // add starting/ corner point
    polygon += `${edge.start.x}% ${edge.start.y}%, `

    // generate random point positions
    const points = generateRandomFloatArray(
      0,
      100,
      randomInt(config.minEdgePoints, config.maxEdgePoints)
    )

    if (edge.order === 'descending') points.reverse()

    // append point position to polygon
    points.forEach((point) => {
      // prevent loops close to the corner
      if (point > 5 && point < 95) {
        const offset = `${Math.random() * config.minEdgeOffset}`
        const x =
          edge.offset === 'x'
            ? `${parseFloat(edge.start.x) + edge.sign * parseFloat(offset).toFixed(2)}`
            : `${point}`
        const y =
          edge.offset === 'y'
            ? `${parseFloat(edge.start.y) + edge.sign * parseFloat(offset).toFixed(2)}`
            : `${point}`
        polygon += `${x}% ${y}%, `
      }
    })

    // add end point
    polygon += `${edge.end.x}% ${edge.end.y}%${i < edges.length - 1 ? ', ' : ')'}`
  })

  return polygon
}

const EdgedStyle = styled('div')(({ theme, clipPath, elevation = 0 }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  boxShadow: theme.shadows[3],
  clipPath: clipPath,
}))

const ShadowWrapper = styled('div')(({ clipPath, elevation = 0 }) => ({
  position: 'relative',
  zIndex: 0,
  width: '100%',
  height: '100%',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: elevation + 'px',
    left: elevation + 'px',
    width: '100%',
    height: '100%',
    clipPath: clipPath,
    background: '#000',
    filter: 'blur(20%)',
    opacity: 0.2,
    zIndex: -1,
  },
}))

const PaperEdge = ({ children, elevation = 0 }) => {
  const clipPath = useMemo(() => generateRandomEdgeNoise(), [])

  return useMemo(
    () =>
      elevation != 0 ? (
        <ShadowWrapper clipPath={clipPath} elevation={elevation}>
          <EdgedStyle clipPath={clipPath} elevation={elevation}>
            {children}
          </EdgedStyle>
        </ShadowWrapper>
      ) : (
        <EdgedStyle clipPath={clipPath}>{children}</EdgedStyle>
      ),
    [children, elevation]
  )
}

export { PaperEdge }
