import * as Styled from '../styles/Login.module'

import Input from '../components/Input'
import LoginForm from '../components/Form'
import LoginSubmit from '../components/Submit'
import LoginChangeSign from '../components/ChangeSign'

export default function Login() {
  return (
    <LoginForm title='Login'>
      <Styled.LoginInputContent>
        <Input label='Username' placeholder='Type your username' type='text' />

        <Input
          label='Password'
          placeholder='Type your password'
          type='password'
        />
      </Styled.LoginInputContent>

      <Styled.LoginForgotYourPassword>
        Forgot password?
      </Styled.LoginForgotYourPassword>

      <LoginSubmit href='/'>Login</LoginSubmit>
      <LoginChangeSign href='/signup'>Sign Up</LoginChangeSign>

    </LoginForm>
  )
}
