import { StyledHeader, Nav, Logo } from './styles/Header.styled'
import { Flex, FlexItem } from './styles/Flex.styled'
import { Link, useNavigate } from 'react-router-dom'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import { Button } from './styles/Button.styled'

export default function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <>
      <StyledHeader>
        <Flex>
          <FlexItem width={'800px;'}>
            <Link to="/">
              <Logo>Scheduler</Logo>
            </Link>
          </FlexItem>
          {user ? (
            <Button className='btn' onClick={onLogout}>
              <FaSignOutAlt />Sign out 
            </Button>
        ) : (
          <>
              <Link to='/login'>
                <FaSignInAlt /> Login
              </Link>
              <Link to='/register'>
                <FaUser /> Register
              </Link>
          </>
        )}
        </Flex>
      </StyledHeader>
    </>
  )
}
