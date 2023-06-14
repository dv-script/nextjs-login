import { PropsWithChildren } from 'react'

import * as Styled from './style'

export default function Submit({ children }: PropsWithChildren) {
  return <Styled.LoginSubmit>{children}</Styled.LoginSubmit>
}
