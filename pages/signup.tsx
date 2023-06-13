import * as Styled from '../styles/SignUp.module'

import LoginForm from '../components/Form'
import Input from '../components/Input'
import LoginSubmit from '../components/Submit'
import LoginChangeSign from '../components/ChangeSign'

export default function SignUp() {
  return (
    <LoginForm title='Sign Up'>
      <Input label='Full Name' placeholder='Enter your name' type='text' />

      <Input label='Email' placeholder='Enter your email' type='email' />

      <Input
        label='Password'
        placeholder='Enter your password'
        type='password'
      />

      <Input
        label='Phone Number'
        placeholder='Enter your phone number'
        type='phone'
      />

      <LoginSubmit href='/'>Sign Up</LoginSubmit>
      <Styled.SignUpDoYouHaveAnAccount>
        Do you have an Account?
      </Styled.SignUpDoYouHaveAnAccount>
      <LoginChangeSign href='/login'>Sign in </LoginChangeSign>
    </LoginForm>
  )
}
