import React from 'react';

const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="project">
        <img src="project_image_1" alt="Project 1" />
        <div>
          <h3>Project Title</h3>
          <p>Description of the project</p>
          <a href="link_to_deployed_app">Deployed App</a>
          <a href="link_to_github_repo">GitHub Repository</a>
        </div>
      </div>
      {/* add more projects  */}
    </section>
  );
};

export default Portfolio;