import React, {useRef, useState} from 'react'
import './contacts.css'
import {AiOutlineMail, AiOutlinePhone} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import emailjs from 'emailjs-com';


function Contacts() {
  const formRef = useRef()
  const [done, setDone] = useState(false)
  const handleSubmit = (e) =>{
    e.preventDefault()
    
    emailjs.sendForm(
      'service_plukz9a', 
      'template_jis4l7h', 
      formRef.current, 
      '8siY23Uyt2-cA2tkw'
      )
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  }
  
  return (
    <div id='contacts'>
        <article className="contacts-left">
          <h2>Contact Information</h2>
          <h3>Have Any Questions?</h3>
          <p className='contacts-info-desc'>Best way to reach me and its many options. I will answer any questions you have.</p>
          <div className='contact-info'>
            <p><AiOutlinePhone /> 813-459-1471</p> 
            <p><AiOutlineMail /> Cr_Vega23@outlook.com</p> 
            <p><GoLocation /> Tampa, Fl (Remote)</p> 
          </div>
        </article>
         
        <article className="contacts-right">
          <h2>Contact Me</h2>
          <h3>Send Me An Email</h3>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type='text' placeholder='Name' name='user_name' />
            <input type='text' placeholder='Subject' name='user_subject' />
            <input type='text' placeholder='Email' name='user_email' />
            <textarea rows='5' placeholder='Message' name='message'/>
            <button>Submit</button>
            {done && 'Email was sent!'}
          </form>
        </article>
    </div>
  )
}

export default Contacts