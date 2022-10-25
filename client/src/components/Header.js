import { StyledHeader, Nav, Logo } from './styles/Header.styled'
import { StyledContainer as Container } from './styles/Container.styled'
import { Button } from './styles/Button.styled'
import { Flex, FlexItem } from './styles/Flex.styled'

export default function Header() {
  return (
    <StyledHeader>
      <Flex>
        <FlexItem width={'800px;'}><Logo>Scheduler</Logo></FlexItem>
        <Button>Sign Up</Button>
        <Button>Log In</Button>
      </Flex>
    </StyledHeader>
  )
}
