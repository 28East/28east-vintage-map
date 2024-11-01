import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from './errors'
import AppMap from './map.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppMap />,
    errorElement: <ErrorPage />,
  },
])

export default router
