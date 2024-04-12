import React from 'react';
import '../styles/Portfolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
const Portfolio = () => {
  return (
    <section>
      <h2 className='portfolio'>Portfolio</h2>
      <section className='project-container'>
      <div className="project">
          <div className="project-content">
            <img src="src/images/project1.png" alt="Project 1" className="project-image" />
            <div className="project-overlay">
              <a href="https://agile-hollows-63324-0df4568dcdbc.herokuapp.com/login">
                <h3>Data Dish</h3>
              </a>
              <a href="https://github.com/mymashedpotatoes/Data-Dish?tab=readme-ov-file" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
              
            </a>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="project-content">
            <img src="src/images/project2.png" alt="Project 2" className="project-image" />
            <div className="project-overlay">
              <a href="https://sarafuller2018.github.io/PureMomentum-Workout-Site/">
                <h3>Pure Momentum</h3>
              </a>
              <a href="https://github.com/sarafuller2018/PureMomentum-Workout-Site" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
              
            </a>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="project-content">
            <img src="../images/project3.png" alt="Project 3" className="project-image" />
            <div className="project-overlay">
              <a href="https://oneuglyghost.github.io/my-professional-portfolio-/">
                <h3>Portfolio</h3>
              </a>
              <a href="https://github.com/oneuglyghost/my-professional-portfolio-?tab=readme-ov-file" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
              
            </a>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="project-content">
            <img src="src/images/project4.png" alt="Project 4" className="project-image" />
            <div className="project-overlay">
              <a href="https://oneuglyghost.github.io/Weather-Updates/">
                <h3>Weather Updates</h3>
              </a>
              <a href="https://github.com/oneuglyghost/Weather-Updates?tab=readme-ov-file" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
              
            </a>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="project-content">
            <img src="src/images/project5.png" alt="Project 5" className="project-image" />
            <div className="project-overlay">
              <a href="https://oneuglyghost.github.io/Homework-Password-Generator/">
                <h3>Password Generator</h3>
              </a>
              <a href="https://github.com/oneuglyghost/Homework-Password-Generator?tab=readme-ov-file" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
              
            </a>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="project-content">
            <img src="src/images/project6.png" alt="Project 6" className="project-image" />
            <div className="project-overlay">
              <a href="https://oneuglyghost.github.io/module-4-code-quiz/">
                <h3>Data Dish</h3>
              </a>
              <a href="https://github.com/oneuglyghost/module-4-code-quiz" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
              
            </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Portfolio;