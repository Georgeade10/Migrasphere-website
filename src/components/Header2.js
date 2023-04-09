import React, { useState } from 'react';
import style from './Header2.module.css';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/migra_logo.png';

function Header2() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <header className={style.header}>
      <div className={style.logo}>
        <img src={logo} alt='Logo' width='156' height='154' />
      </div>
      <nav className={style.menu}>
        <ul>
          <li>
            <Link to='section1' smooth={true} duration={500}>
              Section 1
            </Link>
          </li>
          <li>
            <Link to='section2' smooth={true} duration={500}>
              Section 2
            </Link>
          </li>
          <li>
            <Link to='section3' smooth={true} duration={500}>
              Section 3
            </Link>
          </li>
          <li>
            <Link to='section4' smooth={true} duration={500}>
              Section 4
            </Link>
          </li>
        </ul>
      </nav>
      <div className={style.hamburger} onClick={toggleMenu}>
        {showMenu ? <FaTimes /> : <FaBars />}
      </div>
      <div
        className={
          showMenu ? `${style.mobileMenu} ${style.slideIn}` : style.mobileMenu
        }
      >
        <ul>
          <li>
            <Link
              to='section1'
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              Section 1
            </Link>
          </li>
          <li>
            <Link
              to='section2'
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              Section 2
            </Link>
          </li>
          <li>
            <Link
              to='section3'
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              Section 3
            </Link>
          </li>
          <li>
            <Link
              to='section4'
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              Section 4
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header2;
