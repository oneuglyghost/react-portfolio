import React from 'react';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

const Content = ({ selectedSection }) => {
  return (
    <main>
      {selectedSection === 'AboutMe' && <AboutMe />}
      {selectedSection === 'Portfolio' && <Portfolio />}
      {selectedSection === 'Contact' && <Contact />}
      {selectedSection === 'Resume' && <Resume />}
    </main>
  );
};

export default Content;