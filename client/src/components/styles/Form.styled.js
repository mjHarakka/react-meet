import styled from 'styled-components'

export const StyledForm = styled.div`
  width: 400px;

  * {
    margin: 10px;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 10px;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    margin-bottom: 10px;
    font-family: inherit;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`
