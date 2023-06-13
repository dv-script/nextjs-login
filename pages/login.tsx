import * as Styled from '../styles/Login.module'

import Input from '../components/Input'
import LoginForm from '../components/Form'
import LoginSubmit from '../components/Submit'
import LoginChangeSign from '../components/ChangeSign'
import ForgotYourPassword from '../components/ForgotPassword'

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

      <ForgotYourPassword href='/#'>
        Forgot password?
      </ForgotYourPassword>

      <LoginSubmit href='/'>Login</LoginSubmit>
      <LoginChangeSign href='/signup'>Sign Up</LoginChangeSign>

    </LoginForm>
  )
}
