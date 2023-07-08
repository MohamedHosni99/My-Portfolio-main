import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './Conatct.css';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Contact = () => {
  const form = useRef();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Start submitting state

    emailjs.sendForm('service_3qx69nn', 'contact_template_261b13a', form.current, 'pL4lpr_2W0IKJ7YZJ')
      .then(
        (result) => {
          console.log(result.text);
          setIsFormSubmitted(true); // Set the form submitted state to true
          setIsSubmitting(false); // Stop submitting state
        },
        (error) => {
          console.log(error.text);
          setIsSubmitting(false); // Stop submitting state
        }
      );
  };

  return (
    <section className="py-8 lg:py-24" id="contact">
      <motion.h1
        variants={fadeIn('up', 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="h2 main-title"
      >
        Contact Me
      </motion.h1>
      
      <div className="contact-container py-20 flex flex-col items-center justify-center">
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="contact-card flex-1 flex-col sm:flex-row flex items-center justify-between"
        >
          <a href="mailto:mohamed.hosni9997@gmail.com" className="contact-info flex items-center flex-1 p-4 font-bold text-slate-300 rounded-2xl">
            <FaEnvelope className="mr-2 w-[25px] h-[25px]" />
            <span>mohamed.hosni9997@gmail.com</span>
          </a>
          <a href="tel:tel:+201142941401" className="contact-info mt-5 sm:mt-0 flex items-center flex-1 p-4 font-bold text-slate-300 rounded-2xl">
            <FaWhatsapp className="mr-1.5 w-[25px] h-[25px]" />
            <span>01142941401</span>
          </a>
        </motion.div>
        
        <div className="form-container flex-2 mt-10">
          {isFormSubmitted ? (
            <p className="success-message text-center text-slate-300 font-bold text-base sm:text-3xl capitalize">Thanks for contacting me!</p>
          ) : (
            <motion.form
              variants={fadeIn('left', 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="form"
              onSubmit={sendEmail}
              ref={form}
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="user_name" required />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="user_email" required />
              </div>
              <div className="form-group">
                <label htmlFor="textarea">Message</label>
                <textarea name="message" id="textarea" rows="10" cols="50" required></textarea>
              </div>
              <input className="form-submit-btn" type="submit" value={isSubmitting ? 'Sending...' : 'Send'} disabled={isSubmitting} />
            </motion.form>
          )}
        </div>
      </div>
      <div className="footer text-right px-4 md:px-12">
        <h2 className="text-slate-300 font-bold text-base sm:text-3xl">
          ALL Right Reserved<span className="text-base sm:text-3xl">M.Hosni</span>
        </h2>
      </div>
    </section>
  );
};

export default Contact;
