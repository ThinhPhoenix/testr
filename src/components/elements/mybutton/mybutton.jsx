import { ButtonVariant } from '@/lib/enums/variants/button';
import React from 'react'
import Error from '../error/error';
import { Messages } from '@/lib/enums/messages';
import ButtonNavPrimary from './navprimary/navprimary';
import ButtonHamburger from './hamburger/hamburger';

export default function MyButton({ variant, children, className, ...props }) {
  switch (variant) {
    case ButtonVariant.NAV_PRIMARY:
        return <ButtonNavPrimary {...props}>{children}</ButtonNavPrimary>;
    case ButtonVariant.HAMBURGER:
        return <ButtonHamburger />
    default:
        return <Error>{Messages.REQUIRED} button's variant!</Error>;
  }
}