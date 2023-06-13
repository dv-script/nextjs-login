import { PropsWithChildren } from 'react'

import * as Styled from './style'
import { ISubmitProps } from './types'

export default function Submit({ href, children }: PropsWithChildren<ISubmitProps>) {
  return <Styled.LoginSubmit href={href}>{children}</Styled.LoginSubmit>
}
