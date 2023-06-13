import { PropsWithChildren } from 'react';
import * as Styled from './style';

import { IForgotPassword } from './types';

export default function ForgotPassword({ href, children }: PropsWithChildren<IForgotPassword>) {
    return (
        <Styled.ForgotYourPassword href={href}>
            {children}
        </Styled.ForgotYourPassword>
    )
}