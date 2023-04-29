import React from 'react';
import Experience from './Experience';
import Services from './Services';

export default function Offer() {
  return (
    <div id='offer' className='offer'>
        <h1 className='offer__title'>What do I offer?</h1>
            <div className='offer__container'>
            <Experience />
            <Services />
            </div>
    </div>
  )
}
