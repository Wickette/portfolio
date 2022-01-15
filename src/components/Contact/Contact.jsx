import React, { useRef, useState } from 'react'
import './contact.css'
import Phone from '../../assets/images/phone.png'
import Email from '../../assets/images/email.png'
import Address from '../../assets/images/address.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_9oc1acu', 'template_ll8om7c', formRef.current, 'user_92nV7tnTttagj6FwRmmFB')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
    }

    return (
        <div className='contact_container' id='contact-me'>
            <div className='contact_bg'></div>
            <div className='contact_wrapper'>
                <div className='contact_left'>
                    <h1 className='contact_title'>Contact Me</h1>
                    <div className='contact_info'>
                        <div className='contact_info_item'>
                            <img src={Phone} alt='' className='contact_icon' />+1 (705)-955-3331
                        </div>
                        <div className='contact_info_item'>
                            <img src={Email} alt='' className='contact_icon' />sc.aurora92@gmail.com
                        </div>
                        <div className='contact_info_item'>
                            <img src={Address} alt='' className='contact_icon' />2 - 62 Barrie Road, Orillia, Ontario, Canada, L3V 2P8
                        </div>
                    </div>
                </div>
                <div className='contact_right'>
                    <p className='contact_desc'>
                        <b>What's your story?</b> Get in touch. Always available for freelancing if the right project comes along </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <div className='contact_inputs'>
                            <input type='text' placeholder='Name' name='user_name'/>
                            <input type='text' placeholder='Subject' name='user_subject'/>
                            <input type='text' placeholder='Email' name='user_email'/>
                        </div>
                        <textarea name='message' rows='5' placeholder='Message'/>
                        <button>Submit</button>
                        {done && ` ~ Thank you!`}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
