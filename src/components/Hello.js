import React from 'react';
import CV from './assets/CV.pdf';

export default function Hello() {
  return (
    <div className='header__me'>
      <a href={CV} download className='header__me-link'>Download CV</a> 
      <a href='#contact' className='header__me-link'>Let's Talk</a>
    </div>
  )
}
