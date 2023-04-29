import React from 'react';
import {BsPatchCheckFill} from 'react-icons/bs';

export default function Experience() {
  return (
    <div id='experience' className='experience'>
      <h1 className='experience__title'>My Experience</h1>
      <div className='experience__skills'>
        <div className='experience__skills-skill'>
          <h2><BsPatchCheckFill style={{fontSize:'15px'}} /> HTML</h2>
          <p>Experienced</p>
        </div>
        <div className='experience__skills-skill'>
          <h2><BsPatchCheckFill style={{fontSize:'15px'}} /> CSS</h2>
          <p>Intermediate</p>
        </div>
        <div className='experience__skills-skill'>
          <h2><BsPatchCheckFill style={{fontSize:'15px'}} /> Javascript</h2>
          <p>Intermediate</p>
        </div>
        <div className='experience__skills-skill'>
          <h2><BsPatchCheckFill style={{fontSize:'15px'}} /> SCSS</h2>
          <p>Intermediate</p>
        </div>
        <div className='experience__skills-skill'>
          <h2><BsPatchCheckFill style={{fontSize:'15px'}} /> React</h2>
          <p>Intermediate</p>
        </div>
        <div className='experience__skills-skill'>
          <h2><BsPatchCheckFill style={{fontSize:'15px'}} /> Firebase</h2>
          <p>Basic</p>
        </div>
      </div>
    </div>
  )
}
