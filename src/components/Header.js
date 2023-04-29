import React from 'react'
import Hello from './Hello';
import { BsLinkedin, BsGithub } from "react-icons/bs";
import {SiFreelancer} from "react-icons/si";

export default function Header() {
  return (
    <header className='header'>
      <h5>Hello I'm</h5>
      <h1>Strahinja Djurnic</h1>
      <h5 className='header__front'>Frontend developer</h5>
      <Hello />
      <div className='header__social'>
        <a className='header__social-link' href="https://www.linkedin.com/in/strahinja-djurnic-a84057213/" target='_blank' rel="noreferrer" ><BsLinkedin /></a>
        <a className='header__social-link' href="https://github.com/strahinja1994" target='_blank' rel="noreferrer" ><BsGithub /></a>
        <a className='header__social-link' href="https://www.freelancer.com/u/Strahinja1994" target='_blank' rel="noreferrer" ><SiFreelancer /></a>
      </div>
      <a className='header__scroll' href='#footer'>Scroll down</a>
      <img className='header__image' src='./images/github_profile_img.jpg' alt='profile' />
    </header>
  )
}