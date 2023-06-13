import { PropsWithChildren } from 'react'

import * as Styled from './style'
import { IChangeSign } from './types'

export default function LoginChangeSign({ children, href }: PropsWithChildren<IChangeSign>) {
  return <Styled.LoginChangeSign href={href}>{children}</Styled.LoginChangeSign>
}
