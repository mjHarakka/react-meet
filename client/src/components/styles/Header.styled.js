import styled from 'styled-components'

export const StyledHeader = styled.header`
  height: 80px;
  display: flex;
  align-items: center;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

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
