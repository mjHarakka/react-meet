import { StyledHeader, Nav, Logo } from './styles/Header.styled'
import { StyledContainer as Container } from './styles/Container.styled'

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <a href="Link 1"></a>
          <a href="Link 2"></a>
          <a href="Link 3"></a>
          <a href="Link 4"></a>
        </Nav>
        <Logo>Scheduler</Logo>
      </Container>
    </StyledHeader>
  )
}
