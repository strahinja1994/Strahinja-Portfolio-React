import React from 'react';
import {BsPatchCheckFill} from 'react-icons/bs';

export default function Services() {
  return (
    <div id='services' className='services'>
      <h1 className='services__title'>My Services</h1>
      <div className='services__skills'>
        <h2><BsPatchCheckFill style={{fontSize:'15px'}} /> Developing web pages from scratch </h2>
        <h2><BsPatchCheckFill style={{fontSize:'15px'}} /> Fixing bugs in code </h2>
        <h2><BsPatchCheckFill style={{fontSize:'15px'}} /> Helping with understandment of code </h2>
      </div>
    </div>
  )
}