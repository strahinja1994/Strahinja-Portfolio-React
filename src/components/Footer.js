import React from 'react';
import {FaFacebookSquare, FaLinkedin} from 'react-icons/fa';
import {SiFreelancer} from 'react-icons/si';

export default function Footer() {
  return (
    <footer id='footer' className='footer'>
      <h1 className='footer__title'>Social networks</h1>
      <div className='footer__networks'>
        <div className='footer__networks-network'>
          <a className='footer__networks-network--title' href='https://www.facebook.com/strahinja.djurnic/' target='_blank' rel="noreferrer" >Facebook</a>
          <a className='footer__networks-network--icon' href='https://www.facebook.com/strahinja.djurnic/' target='_blank' rel="noreferrer"  ><FaFacebookSquare /></a>
        </div>
        <div className='footer__networks-network'>
          <a className='footer__networks-network--title' href='https://www.linkedin.com/in/strahinja-djurnic-a84057213/' target='_blank' rel="noreferrer" >LinkedIn</a>
          <a className='footer__networks-network--icon' href='https://www.linkedin.com/in/strahinja-djurnic-a84057213/' target='_blank' rel="noreferrer"  ><FaLinkedin /></a>
        </div>
        <div className='footer__networks-network'>
          <a className='footer__networks-network--title' href='https://www.freelancer.com/u/Strahinja1994' target='_blank' rel="noreferrer" >Freelancer</a>
          <a className='footer__networks-network--icon' href='https://www.freelancer.com/u/Strahinja1994' target='_blank' rel="noreferrer"  ><SiFreelancer /></a>
        </div>
      </div>
    </footer>
  )
}
