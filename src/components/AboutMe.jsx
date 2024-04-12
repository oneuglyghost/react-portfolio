import React from 'react';
import '../styles/AboutMe.css'
const AboutMe = () => {
  return (
    <section>
      <section>
        <h2 className='aboutMe'>About Me</h2>
      </section>
      <section className='about-me-container'>
        <div className='about-me-content'></div>
        <img className= 'profilepic' src='./images/profile.jpeg' alt="Profile" />
        <p>Hello there! I’m Bernardo Alonso, a Software Developer with a knack for turning intricate ideas into elegant solutions. My journey began in the realm of Mechanical Engineering, where I honed my problem-solving skills and attention to detail. Over time, my passion for technology led me to pivot into the dynamic world of software development.</p>
      </section>
    </section>
  );
};

export default AboutMe;