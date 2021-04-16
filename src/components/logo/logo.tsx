import React, { FC } from 'react';
import styles from './logo.module.css';

type LogoProps = {
  title?: string
}

const Logo: FC<LogoProps> = ({ title = 'D. Berkut' }) => {
  return <span className={styles.logo}>{title}</span>
}

export default Logo;
