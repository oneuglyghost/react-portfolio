import React from 'react';
import '../styles/Resume.css'
const Resume = () => {
  return (
    <section>
      <h2 className='resume'>Resume</h2>
      <section className='resume-container'>
        
        <p>Bernardo Alonso</p>
        <p>bernardo4430@gmail.com ❖ (832) 433-3953 ❖ Houston, TX ❖ Portfolio/GitHub</p>
        <h3>WORK EXPERIENCE</h3>
        <h4>AMV | Nov. 2023 – Present | Full-Stack Developer | Houston, TX</h4>
        <ul>
          <li>AMV specializes in the resale of refurbished technology, providing affordable quality products.</li>
          <li>Revamped the company’s inventory application as a Full-Stack Developer, completely redesigning and rebuilding it to improve efficiency and functionality.</li>
          <li>Implemented new features and enhancements, resulting in a more user-friendly and streamlined application.</li>
          <li>Utilized technologies such as React, CSS, Node.js, Express.js, and MySQL to modernize the application and enhance its performance.</li>
        </ul>
        <h4>USAShelco | Jan. 2022 – Mar. 2023 | Junior Engineer | Houston, TX</h4>
        <ul>
          <li>Collaborated closely with a dynamic engineering team, contributing to the design, development, testing, and maintenance of diverse engineering projects.</li>
          <li>Played a key role in the conceptualization and design of efficient assembly line flows within factory settings.</li>
        </ul>
        <h4>Whole Foods Market | Sales Associate | Sep. 2013 – Oct. 2018 | Houston, TX</h4>
        <p>Assisted customers and maintained product displays.</p>
        <h4>Hobby Lobby | Certified Framer | Jun. 2020 – Dec. 2020 | Houston, TX</h4>
        <p>Creatively designed and crafted custom frames, ensuring perfect presentation for cherished artwork, photos, and memorabilia.</p>
        <h3>EDUCATION</h3>
        <p>Lone Star College | Dec. 2019 | BS, Mechanical Engineering | Cypress, TX</p>
        <h3>SKILLS & INTERESTS</h3>
        <p>Skills: Git; HTML; CSS; JavaScript; React; Node; Express; MySQL; AutoCAD; SolidWorks; Mechanical design; Strategic planning; Attention to detail; Effective communication; Technology exploration.</p>
        <p>Interests: Coding; road trips; beaches; calisthenics; video games; movies; The Office; Legos.</p>
      </section>
    </section>
  );
};

export default Resume;