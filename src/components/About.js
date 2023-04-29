import React from 'react'
import {FiAward, FiUsers} from 'react-icons/fi';
import {HiLibrary} from 'react-icons/hi'

export default function About() {
  return (
    <div id='about' className='about'>
        <h2 className='about__title'>About me</h2>
        <div className='about__content'>
          <div className='about__image'>
            <img src='../images/portfolio.jpg' alt='My profile' />
          </div>
          <div className='about__me'>
            <div className='about__me-cards'>
              <div className='about__me-card'>
                <FiAward className='about__me-card--icon'/>
                <h4 className='about__me-card--title'>Experience</h4>
                <p className='about__me-card--text'>1+ Years working</p>
              </div>
              <div className='about__me-card'>
                <FiUsers className='about__me-card--icon' />
                <h4 className='about__me-card--title'>Clients</h4>
                <p className='about__me-card--text'>Unknown</p>
              </div>
              <div className='about__me-card'>
                <HiLibrary className='about__me-card--icon' />
                <h4 className='about__me-card--title'>Projects</h4>
                <p className='about__me-card--text'>20+ Completed</p>
              </div>
            </div>
            <p className='about__me-text'>
                My name is Strahinja Djurnic! <br/>
              I have bachelor of science degree in physics. Even during college,
              I was interested in coding and kept working in that field after I got my college degree. I finished Javascript
              course organized by <a href='https://itbootcamp.rs/' target='_blank' rel="noreferrer" className='about__me-link'>itbootcamp.rs</a> foundation.
              Since then I have been watching tutorials and
              courses all over the internet for over a year. I have been focusing on Frontend, working on SCSS, Javascript and on React. Some of
              my work and ideas you can find on my Github page or you can follow links you can find in "My work" section. If you like what you see, feel free to contact me.<br/>
              Best regards!
            </p>
          </div>
        </div>
        <p className='about__me-text-tablet'>
                My name is Strahinja Djurnic! <br/>
              I have bachelor of science degree in physics. Even during college,
              I was interested in coding and kept working in that field after I got my college degree. I finished Javascript
              course organized by <a href='https://itbootcamp.rs/' target='_blank' rel="noreferrer" className='about__me-link'>itbootcamp.rs</a> foundation.
              Since then I have been watching tutorials and
              courses all over the internet for over a year. I have been focusing on Frontend, working on SCSS, Javascript and on React. Some of
              my work and ideas you can find on my Github page or you can follow links you can find in "My work" section. If you like what you see, feel free to contact me.<br/>
              Best regards!
            </p>
    </div>
  )
}
