import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GiHouseKeys } from 'react-icons/gi';
import logo from '../../assets/migra_logo.png';
import { Link } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={logo} alt='app__logo' />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'>
          <Link
            to='section1'
            smooth={true}
            duration={500}
            spy={true}
            offset={-60}
          >
            Виды услуг
          </Link>
        </li>
        <li className='p__opensans'>
          <Link
            to='section2'
            smooth={true}
            duration={500}
            spy={true}
            offset={-60}
          >
            О нас
          </Link>
        </li>
        <li className='p__opensans'>
          <Link
            to='section3'
            smooth={true}
            duration={500}
            spy={true}
            offset={-60}
          >
            Контакты
          </Link>
        </li>

        <li className='p__opensans'>
          <Link
            to='section4'
            smooth={true}
            duration={500}
            spy={true}
            offset={-60}
          >
            Наши партнеры
          </Link>
        </li>
      </ul>

      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu
          color='#fff'
          fontSize={40}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <FaTimes
              fontSize={40}
              className='overlay__close'
              onClick={() => setToggleMenu(false)}
            />
            <ul className='app__navbar-smallscreen_links'>
              <li>
                <Link
                  to='section1'
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-60}
                  onClick={() => setToggleMenu(false)}
                >
                  Виды услуг
                </Link>
              </li>
              <li>
                <Link
                  to='section2'
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-60}
                  onClick={() => setToggleMenu(false)}
                >
                  О нас
                </Link>
              </li>
              <li>
                <Link
                  to='section3'
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-60}
                  onClick={() => setToggleMenu(false)}
                >
                  Контакты
                </Link>
              </li>
              <li>
                <Link
                  to='section4'
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-60}
                  onClick={() => setToggleMenu(false)}
                >
                  Наши партнеры
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
