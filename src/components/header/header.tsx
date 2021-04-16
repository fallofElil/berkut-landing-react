import React, { FC } from 'react';

import ButtonBurger from '../button-burger/button-burger';
import Logo from "../logo/logo";
import styles from './header.module.css';

const Header: FC = () => {
  return (
    <header className={styles.appHeader}>
      <Logo />
      <ButtonBurger onClick={() => console.log('noop')} />
    </header>
  )
}

export default Header;
