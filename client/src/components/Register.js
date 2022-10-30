import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'
import { Button } from './styles/Button.styled'
import { StyledForm } from './styles/Form.styled'
import { Input } from './styles/Input.styled'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  })

  const { name, email, password, passwordConfirm } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <StyledForm>
      <h1>
        <FaUser />
        Sign up
      </h1>
      <p>Create an account</p>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          placeholder="Enter your name"
          onChange={onChange}
        ></input>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          placeholder="Enter your email"
          onChange={onChange}
        ></input>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          placeholder="Enter your password"
          onChange={onChange}
        ></input>
        <input
          type="password"
          id="passwordConfirm"
          name="passwordConfirm"
          value={passwordConfirm}
          placeholder="Confirm your password"
          onChange={onChange}
        ></input>
        <Button>Sign up</Button>
      </form>
    </StyledForm>
  )
}

export default Register
