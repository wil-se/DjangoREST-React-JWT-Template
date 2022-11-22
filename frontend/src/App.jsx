import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from 'react-router-dom'
import { history } from '_helpers'
import { MainNavbar, PrivateRoute } from '_components'
import { Login } from 'login'

import Dashboard from 'dashboard/Dashboard'
import { Container, Row, Col } from 'react-bootstrap'

export { App }

function App() {
  // init custom history object to allow navigation from
  // anywhere in the react app (inside or outside components)
  history.navigate = useNavigate()
  history.location = useLocation()

  return (
    <Container>
        <MainNavbar />
        <Routes>
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
    </Container>
  )
}
