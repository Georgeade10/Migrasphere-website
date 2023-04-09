import { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/migra_logo.png';
import style from './Header3.module.css';

const Header3 = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleMobileMenuToggle = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <header className={style.header}>
      <div className={style.logo}>
        <img src={logo} alt='Migra Logo' width='156' height='154' />
      </div>

      <nav className={style.nav}>
        <ul className={style.menu}>
          <li>
            <Link to='section1' spy={true} smooth={true}>
              Section 1
            </Link>
          </li>
          <li>
            <Link to='section2' spy={true} smooth={true}>
              Section 2
            </Link>
          </li>
          <li>
            <Link to='section3' spy={true} smooth={true}>
              Section 3
            </Link>
          </li>
          <li>
            <Link to='section4' spy={true} smooth={true}>
              Section 4
            </Link>
          </li>
        </ul>
        <div className={style.hamburger} onClick={handleMobileMenuToggle}>
          {showMobileMenu ? (
            <FaTimes className={style.icon} />
          ) : (
            <FaBars className={style.icon} />
          )}
        </div>
      </nav>

      <div
        className={`${style.mobileMenu} ${showMobileMenu ? style.show : ''}`}
      >
        <div className={style.mobileMenuContent}>
          <ul className={style.mobileMenuList}>
            <li>
              <Link
                to='section1'
                spy={true}
                smooth={true}
                onClick={handleMobileMenuToggle}
              >
                Section 1
              </Link>
            </li>
            <li>
              <Link
                to='section2'
                spy={true}
                smooth={true}
                onClick={handleMobileMenuToggle}
              >
                Section 2
              </Link>
            </li>
            <li>
              <Link
                to='section3'
                spy={true}
                smooth={true}
                onClick={handleMobileMenuToggle}
              >
                Section 3
              </Link>
            </li>
            <li>
              <Link
                to='section4'
                spy={true}
                smooth={true}
                onClick={handleMobileMenuToggle}
              >
                Section 4
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header3;
