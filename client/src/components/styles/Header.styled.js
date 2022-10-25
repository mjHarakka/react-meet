import styled from 'styled-components'

export const StyledHeader = styled.header`
  height: 80px;
`

export const Nav = styled.nav`
  a {
    font-size: 2rem;
    text-transform: uppercase;
  }


  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`

export const Logo = styled.div`
  font-size: 3rem;
  font-weight: 900;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
  }
`
