import { PropsWithChildren } from 'react'
import { IForm } from './types'

import * as Styled from './style'

export default function Form({
  children,
  title,
  onSubmit
}: PropsWithChildren<IForm>) {
  return (
    <Styled.LoginSection>
      <Styled.LoginContainer>
        <Styled.LoginBox onSubmit={onSubmit}>
          <Styled.LoginTitle>{title}</Styled.LoginTitle>

          {children}
        </Styled.LoginBox>
      </Styled.LoginContainer>
    </Styled.LoginSection>
  )
}
