import React from 'react';

const Navbar = ({ selectedSection, setSelectedSection }) => {
  const sections = ['AboutMe', 'Portfolio', 'Contact', 'Resume'];

  return (
    <nav>
      {sections.map((section) => (
        <a
          key={section}
          className={selectedSection === section ? 'active' : ''}
          onClick={() => setSelectedSection(section)}
        >
          {section}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;