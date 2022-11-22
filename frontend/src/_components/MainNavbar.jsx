import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '_store'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export { MainNavbar }

function MainNavbar() {
  const authUser = useSelector((x) => x.auth.user)
  const dispatch = useDispatch()
  const logout = () => dispatch(authActions.logout())

  // only show nav when logged in
  if (!authUser) return null

  return (
    <Navbar sticky="top" className="d-flex justify-content-center">
      <Nav className="d-flex justify-content-center">
        <Link className='mx-2' to={"/dashboard"}>Dashboard</Link>
        <Link className='mx-2' to={"/"} onClick={logout}>Logout</Link>
      </Nav>
    </Navbar>
  )
}