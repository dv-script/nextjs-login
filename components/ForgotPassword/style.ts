import styled from "styled-components";
import Link from "next/link";

export const ForgotYourPassword = styled(Link)`
  cursor: pointer;
  width: max-content;
  margin-left: auto;
  transition: 300ms;

  :hover {
    color: #9d51f2;
  }

  :active {
    color: #3ba7e7;
  }
`
