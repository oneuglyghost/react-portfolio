import React from 'react';

const Header = ({ selectedSection, setSelectedSection }) => {
  const sections = ['AboutMe', 'Portfolio', 'Contact', 'Resume'];

  return (
    <header>
      <h1>Developer's Name</h1>
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
    </header>
  );
};

export default Header;