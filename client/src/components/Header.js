import { StyledHeader, Nav, Logo } from './styles/Header.styled'
import { StyledContainer as Container } from './styles/Container.styled'
import { Button } from './styles/Button.styled'
import { Flex, FlexItem } from './styles/Flex.styled'
import { Link } from 'react-router-dom'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'

export default function Header() {
  return (
    <>
      <StyledHeader>
        <Flex>
          <FlexItem width={'800px;'}>
            <Link to="/">
              <Logo>Scheduler</Logo>
            </Link>
          </FlexItem>
          <Link to="/login">
            <FaSignInAlt /> Login
          </Link>
          <Link to="/register">
            <FaUser />
            Sign up
          </Link>
        </Flex>
      </StyledHeader>
    </>
  )
}
