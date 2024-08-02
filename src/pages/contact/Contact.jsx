import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import{
    FaEnvelopeOpen,
    FaPhoneSquareAlt,
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaWhatsapp,
    FaInstagram
} from "react-icons/fa";

import{FiSend} from 'react-icons/fi'
import "./contact.css"

const Contact=()=>{
    

      const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "10c003ff-b20a-44af-b5ce-1b70b702e7cc");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
    
    
    return (
        <section className="contact section">
            <h2 className="section__title">
              Get In <span>Touch</span>
            </h2>

            <div className="contact__container container grid">
                <div className="contact__data">
                    <h3 className="contact__title"> Contact me !</h3>
                    <p className="contact__description">
                       Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                    </p>

                    <div className="contact__info">
                        <div className="info__item">
                         <FaEnvelopeOpen className="info__icon"/>
                         <div>
                            <span className="info__title">Mail me</span>
                            <h4 className="info__desc">zainishtiaq.7866@gmail.com</h4>
                         </div>

                        </div>
                        <div className="info__item">
                         <FaPhoneSquareAlt className="info__icon"/>
                         <div>
                            <span className="info__title">Call me</span>
                            <h4 className="info__desc">+923028163676</h4>
                         </div>

                        </div>
                    </div>

                    <div className="contact__socials ">
                        <a href="https://www.facebook.com/zainishtiaq.316/" className="contact__social-link py-3 px-3">
                            <FaFacebookF/>
                        </a>
                        <a href="https://www.instagram.com/mr_zain.ishtiaq316/" className="contact__social-link py-3 px-3">
                            <FaInstagram/>
                        </a>
                        <a href="https://www.linkedin.com/in/zain-ishtiaq316/" className="contact__social-link py-3 px-3">
                            <FaLinkedinIn/>
                        </a>
                        <a href="https://wa.me/qr/FVWEKH7KBTTSA1" className="contact__social-link py-3 px-3">
                            <FaWhatsapp/>
                        </a>
                    </div>
                </div>

                <form onSubmit={onSubmit} className="contact__form">

                    <div className="form__input-group">
                        <div className="form__input-div">
                            <input type="text" placeholder="Your Name" className="form__control" name="name" required/>
                        </div>
                        <div className="form__input-div">
                            <input type="email" placeholder="Your Email" className="form__control" name="email" required/>
                        </div>
                        <div className="form__input-div">
                            <input type="text" placeholder="Your Subject" className="form__control" name="subject" required/>
                        </div>
                    </div>

                    <div className="form__input-div">
                      <textarea placeholder="Your Message" className="form__control textarea" name="message" required>

                      </textarea>  
     
                    </div>
                    <button className="button" type="submit">
                     Send Message
                     <span className="button__icon contact__button-icon py-4 px-4">
                      <FiSend/>
                     </span>
                    </button>
                </form>
            </div>
        </section>
    )
}
export default Contact