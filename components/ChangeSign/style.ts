import styled from 'styled-components'
import Link from 'next/link'

export const LoginChangeSign = styled(Link)`
  cursor: pointer;
  margin: 0 auto;
  text-transform: uppercase;
  text-align: center;
  font-size: 14px;
  font-weight: 300;

  :hover {
    color: #9d51f2;
  }

  :active {
    color: #3ba7e7;
  }
`
