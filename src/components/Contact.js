import React from 'react';
import { AiOutlineMail, AiOutlineSkype } from 'react-icons/ai';
import {RiMessengerLine} from 'react-icons/ri';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c0plj1c', 'template_jborhxl', form.current, 'aCQGYZENFGHV2xYoa');

    e.target.reset()
  };

  return (
    <div id='contact' className='contact'>
      <h1 className='contact__title'>Contact Me</h1>
      <div className='contact__container'>
        <div className='contact__container-options'>
          <div className='contact__container-option'>
            <AiOutlineMail className='contact__container-option--icon' />
            <h4 className='contact__container-option--title'>Email</h4>
            <h5 className='contact__container-option--social'>strahinjadjurnic@gmail.com</h5>
            <a className='contact__container-option--link' href='mailto:strahinjadjurnic@gmail.com'>Send a message</a>
          </div>
          <div className='contact__container-option'>
            <RiMessengerLine className='contact__container-option--icon' />
            <h4 className='contact__container-option--title'>Messenger</h4>
            <h5 className='contact__container-option--social'>Strahinja Djurnic</h5>
            <a className='contact__container-option--link' href='https://m.me/strahinja.djurnic' target='_blank' >Send a message</a>
          </div>
          <div className='contact__container-option'>
            <AiOutlineSkype className='contact__container-option--icon' />
            <h4 className='contact__container-option--title'>Skype</h4>
            <h5 className='contact__container-option--social'>live:.cid.e9cf1bafbc41ed48</h5>
            <a className='contact__container-option--link' href='skype:live:.cid.e9cf1bafbc41ed48?chat' target='_blank' >Send a message</a>
          </div>
        </div>
        <form id='form' className='form' ref={form} onSubmit={sendEmail}>
          <input type='text' className='form__name' name='name' placeholder='Your Full Name' required />
          <input type='email' className='form__email' name='email' placeholder='Your Email' required />
          <textarea className='form__text' name='message' rows='10' placeholder='Your Message' required ></textarea>
          <button type='submit' className='form__button'>Send Message</button>
        </form>
      </div>
    </div>
  )
}