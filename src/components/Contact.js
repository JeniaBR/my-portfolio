import React from 'react';
import './Contact.css';

const Contact = () => {
  return(
    <section className="contact-container">
      <h2>Contact</h2>
      <p>Here, no contact form, sorry spammers. But wait ! <br/> There is so many ways to get in touch with me !</p>
      <div className="contact-ways">
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/jeniabrook">
          <i className="fa fa-twitter fa-5x fa-contact" aria-hidden="true"></i>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/JeniaBR">
          <i className="fa fa-github fa-5x fa-contact" aria-hidden="true"></i>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jenia-brook-6807234b/">
          <i className="fa fa-linkedin-square fa-5x fa-contact" aria-hidden="true"></i>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/jenia.brook">
          <i className="fa fa-facebook-official fa-5x fa-contact" aria-hidden="true"></i>
        </a>
        <a href="mailto:jeniabrook@gmail.com">
          <i className="fa fa-envelope fa-5x fa-contact" aria-hidden="true"></i>
        </a>
        <a href="tel:+972547335581">
          <i className="fa fa-phone-square fa-5x fa-contact" aria-hidden="true"></i>
        </a>
      </div>
    </section>
  );
}

export default Contact;