import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${(props) => props.flexDirection};
`
export const FlexItem = styled.div`
  width: ${(props) => props.width};
  flex-basis: ${(props) => props.flexBasis};
  flex-shrink: ${(props) => props.flexShrink};
  flex-grow: ${(props) => props.flexGrow};
`
