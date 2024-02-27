import React from 'react';
import style from './header.module.css';
import svg from '../../asset/images/wordle_logo.svg';
import LogoSvg from './LogoSvg';

const Header = () => {
  return (
    <header className={style.header}>
      <LogoSvg />
    </header>
  )
}
// <img src={svg} style={{height: '4rem', color: 'white'}} />
export default Header;