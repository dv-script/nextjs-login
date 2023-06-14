import { useState } from 'react'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/router'

import * as Styled from '../styles/Login.module'

import Input from '../components/Input'
import Form from '../components/Form'
import Submit from '../components/Submit'
import ChangeSign from '../components/ChangeSign'
import ForgotYourPassword from '../components/ForgotPassword'
import SignError from '../components/SignError'

export default function Login() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [error, setError] = useState('')
  const router = useRouter()

  const handleFormEdit = (event, name) => {
    setFormData({
      ...formData,
      [name]: event.target.value
    })
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()

    try {

      const response = await fetch('http://localhost:3000/api/user/login', {
        method: 'POST',
        body: JSON.stringify(formData)
      })

      const data = await response.json()
      if (response.status !== 200) throw new Error(data)

      setCookie('autorization', data)
      router.push('/')

    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <Form
      title='Login'
      onSubmit={(e) => handleFormSubmit(e)}
    >
      <Styled.LoginInputContent>
        <Input
          label='Email'
          placeholder='Type your email'
          type='text'
          value={formData.email}
          onChange={(e) => {handleFormEdit(e, 'email')}}
          required
        />

        <Input
          label='Password'
          placeholder='Type your password'
          type='password'
          value={formData.password}
          onChange={(e) => {handleFormEdit(e, 'password')}}
          required
        />
      </Styled.LoginInputContent>

      {error && <SignError>{error}</SignError>}

      <ForgotYourPassword href='/#'>
        Forgot password?
      </ForgotYourPassword>

      <Submit>Login</Submit>
      <ChangeSign href='/signup'>Sign Up</ChangeSign>

    </Form>
  )
}
