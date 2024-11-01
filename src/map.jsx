import React, { useEffect, useState } from 'react'
import {
  Map,
  MapControl,
  ControlPosition,
  useApiLoadingStatus,
  APILoadingStatus,
} from '@vis.gl/react-google-maps'
import { CircularProgress, Paper, Typography, Box } from '@mui/material'

const AppMap = React.memo(() => {
  const status = useApiLoadingStatus()
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    if (status === APILoadingStatus.LOADING) {
      setIsLoading(true)
    } else if (status === APILoadingStatus.FAILED) {
      setHasError(true)
    } else {
      setIsLoading(false)
    }
  }, [status])

  if (hasError) {
    return <Paper>Error loading map</Paper>
  }

  const defaultZoom = parseInt(import.meta.env.VITE_GOOGLE_MAP_ZOOM) || 6
  const defaultLat = parseFloat(import.meta.env.VITE_GOOGLE_MAP_LAT) || -26.0
  const defaultLon = parseFloat(import.meta.env.VITE_GOOGLE_MAP_LON) || 28.0

  return (
    <Box
      sx={{
        maxWidth: '1280px',
        maxHeight: '1080px',
        margin: 'auto',
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{
          m: 2,
        }}
      >
        Ye Olde Mappa Mundi
      </Typography>
      <Box
        sx={{
          width: '100%',
          height: '60vh',
          minWidth: '400px',
          minHeight: '400px',
          position: 'relative',
          padding: '0',
          margin: '0',
          boxShadow: 3,
        }}
      >
        {isLoading ? (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <Map
            style={{
              width: '100%',
              height: '100%',
            }}
            id="map-primary"
            mapId={import.meta.env.VITE_GOOGLE_MAP_ID}
            defaultCenter={{ lat: defaultLat, lng: defaultLon }}
            defaultZoom={defaultZoom}
            mapTypeControl={false}
            zoomControlOptions={{
              position: ControlPosition.RIGHT_CENTER,
            }}
            fullscreenControl={false}
            streetViewControl={false}
            gestureHandling={'greedy'}
          >
            <MapControl position={ControlPosition.LEFT_BOTTOM}>
              <a
                href="http://28east.co.za"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/icon.svg"
                  alt="Website Icon"
                  style={{
                    width: '80px',
                    height: '80px',
                    opacity: 0.8,
                    padding: '10px',
                  }}
                />
              </a>
            </MapControl>
          </Map>
        )}
      </Box>
    </Box>
  )
})

AppMap.displayName = 'AppMap'

export default AppMap
