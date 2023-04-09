import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import style from './Header.module.css';
import logo from '../assets/migra_logo.png';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuClick = () => {
    if (showMenu) {
      setShowMenu(false);
    }
  };

  return (
    <div className={style.header}>
      <div className={style.logo}>
        <img src={logo} alt='Logo' width='156' height='154' />
      </div>
      <div className={style.menu}>
        <Link
          to='section1'
          smooth={true}
          duration={500}
          spy={true}
          offset={-60}
          className={style.menuItem}
          onClick={handleMenuClick}
        >
          Виды услуг
        </Link>
        <Link
          to='section2'
          smooth={true}
          duration={500}
          spy={true}
          offset={-60}
          className={style.menuItem}
          onClick={handleMenuClick}
        >
          О нас
        </Link>
        <Link
          to='section3'
          smooth={true}
          duration={500}
          spy={true}
          offset={-60}
          className={style.menuItem}
          onClick={handleMenuClick}
        >
          Контакты
        </Link>
        <Link
          to='section4'
          smooth={true}
          duration={500}
          spy={true}
          offset={-60}
          className={style.menuItem}
          onClick={handleMenuClick}
        >
          Наши партнеры
        </Link>
      </div>
      <div className={style.hamburger} onClick={toggleMenu}>
        {showMenu ? <FaTimes size={40} /> : <FaBars size={40} />}
      </div>
      {showMenu && (
        // Newly added code starts here
        <div className={style.menuHamburger}>
          <div className={style.cancelButton} onClick={toggleMenu}></div>
          <Link
            to='section1'
            smooth={true}
            duration={500}
            spy={true}
            offset={-60}
            className={style.menuItem}
            onClick={handleMenuClick}
          >
            Виды услуг
          </Link>
          <Link
            to='section2'
            smooth={true}
            duration={500}
            spy={true}
            offset={-60}
            className={style.menuItem}
            onClick={handleMenuClick}
          >
            О нас
          </Link>
          <Link
            to='section3'
            smooth={true}
            duration={500}
            spy={true}
            offset={-60}
            className={style.menuItem}
            onClick={handleMenuClick}
          >
            Контакты
          </Link>
          <Link
            to='section4'
            smooth={true}
            duration={500}
            spy={true}
            offset={-60}
            className={style.menuItem}
            onClick={handleMenuClick}
          >
            Наши партнеры
          </Link>
        </div>
        // Newly added code ends here
      )}
    </div>
  );
}
export default Header;

/* import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import style from './Header.module.css';
import logo from '../assets/migra_logo.png';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuClick = () => {
    if (showMenu) {
      setShowMenu(false);
    }
  };

  return (
    <div className={style.header}>
      <div className={style.logo}>
        <img src={logo} alt='Logo' width='156' height='154' />
      </div>
      <div className={style.menu}>
        <Link
          to='section1'
          smooth={true}
          duration={500}
          spy={true}
          offset={-60}
          className={style.menuItem}
          onClick={handleMenuClick}
        >
          Виды услуг
        </Link>
        <Link
          to='section2'
          smooth={true}
          duration={500}
          spy={true}
          offset={-60}
          className={style.menuItem}
          onClick={handleMenuClick}
        >
          О нас
        </Link>
        <Link
          to='section3'
          smooth={true}
          duration={500}
          spy={true}
          offset={-60}
          className={style.menuItem}
          onClick={handleMenuClick}
        >
          Контакты
        </Link>
        <Link
          to='section4'
          smooth={true}
          duration={500}
          spy={true}
          offset={-60}
          className={style.menuItem}
          onClick={handleMenuClick}
        >
          Наши партнеры
        </Link>
      </div>
      <div className={style.hamburger} onClick={toggleMenu}>
        {showMenu ? <FaTimes size={40} /> : <FaBars size={40} />}
      </div>
      {showMenu && (
        <div className={style.menuHamburger}>
          <div className={style.cancelButton} onClick={toggleMenu}></div>
          <Link
            to='section1'
            smooth={true}
            duration={500}
            spy={true}
            offset={-60}
            className={style.menuItem}
            onClick={handleMenuClick}
          >
            Виды услуг
          </Link>
          <Link
            to='section2'
            smooth={true}
            duration={500}
            spy={true}
            offset={-60}
            className={style.menuItem}
            onClick={handleMenuClick}
          >
            О нас
          </Link>
          <Link
            to='section3'
            smooth={true}
            duration={500}
            spy={true}
            offset={-60}
            className={style.menuItem}
            onClick={handleMenuClick}
          >
            Контакты
          </Link>
          <Link
            to='section4'
            smooth={true}
            duration={500}
            spy={true}
            offset={-60}
            className={style.menuItem}
            onClick={handleMenuClick}
          >
            Наши партнеры
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
 */
