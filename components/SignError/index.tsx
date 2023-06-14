import { PropsWithChildren } from "react";

import * as Styled from './style'

export default function SignError({children}: PropsWithChildren) {
    return (
        <Styled.ErrorContent>
            {children}
        </Styled.ErrorContent>
    )
}