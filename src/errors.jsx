import { useRouteError } from 'react-router-dom'
import { Button, Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)
  const navigate = useNavigate()

  return (
    <div id="error-page">
      <Box
        sx={{
          m: 4,
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            m: 2,
          }}
        >
          Woah there!
        </Typography>
        <Box>
          Something went wrong with your request:
          <br />
          {error.statusText || error.message}
        </Box>
      </Box>
      <Button variant="contained" color="primary" onClick={() => navigate('/')}>
        BACK HOME
      </Button>
    </div>
  )
}
