import React from 'react';
import {AiOutlineHome, AiOutlineUser, AiOutlineBook, AiOutlineMessage} from 'react-icons/ai';
import {MdPhotoLibrary} from 'react-icons/md'

export default function Navbar() {

  const [navActive, setNavActive] = React.useState('#');

  const homeActive = () => {
    setNavActive('#')
  }
  const aboutActive = () => {
    setNavActive('#about')
  }
  const offerActive = () => {
    setNavActive('#offer')
  }
  const projectsActive = () => {
    setNavActive('#projects')
  }
  const contactActive = () => {
    setNavActive('#contact')
  }

  return (
    <nav className='nav'>
      <a onClick={homeActive} className={navActive === '#' ? 'nav__link nav__link-active' : 'nav__link'} href='#' on><AiOutlineHome /></a>
      <a onClick={aboutActive} className={navActive === '#about' ? 'nav__link nav__link-active' : 'nav__link'} href='#about'><AiOutlineUser /></a>
      <a onClick={offerActive} className={navActive === '#offer' ? 'nav__link nav__link-active' : 'nav__link'} href='#offer'><AiOutlineBook /></a>
      <a onClick={projectsActive} className={navActive === '#projects' ? 'nav__link nav__link-active' : 'nav__link'} href='#projects'><MdPhotoLibrary /></a>
      <a onClick={contactActive} className={navActive === '#contact' ? 'nav__link nav__link-active' : 'nav__link'} href='#contact'><AiOutlineMessage /></a>
    </nav>
  )
}