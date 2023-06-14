import { useState } from 'react'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/router'

import * as Styled from '../styles/SignUp.module'

import Form from '../components/Form'
import Input from '../components/Input'
import Submit from '../components/Submit'
import ChangeSign from '../components/ChangeSign'
import SignError from '../components/SignError'

export default function SignUp() {

  const [formData, setFormData] = useState({
    name: '',
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

      const response = await fetch('http://localhost:3000/api/user/signup', {
        method: 'POST',
        body: JSON.stringify(formData)
      })

      const data = await response.json()
      if (response.status !== 201) throw new Error(data)

      setCookie('autorization', data)
      router.push('/')

    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <Form
      title='Sign Up'
      onSubmit={(e) => handleFormSubmit(e)}
    >

      <Input
        label='Full Name'
        placeholder='Enter your name'
        type='text'
        value={formData.name}
        onChange={(e) => {handleFormEdit(e, 'name')}}
        required
      />

      <Input
        label='Email'
        placeholder='Enter your email'
        type='email'
        value={formData.email}
        onChange={(e) => {handleFormEdit(e, 'email')}}
        required
      />

      <Input
        label='Password'
        placeholder='Enter your password'
        type='password'
        value={formData.password}
        onChange={(e) => {handleFormEdit(e, 'password')}}
        required
      />

      {error && <SignError>{error}</SignError>}

      <Submit>Sign Up</Submit>

      <Styled.SignUpDoYouHaveAnAccount>Do you have an Account?</Styled.SignUpDoYouHaveAnAccount>

      <ChangeSign href='/login'>Sign in </ChangeSign>

    </Form>
  )
}
