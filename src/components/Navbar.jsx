import React from 'react';
import '../styles/Navbar.css'; // Import the CSS file

const Navbar = ({ selectedSection, setSelectedSection }) => {
  const sections = ['AboutMe', 'Portfolio', 'Contact', 'Resume'];

  return (
    <nav className="navbar">
      {sections.map((section) => (
        <a
          key={section}
          className={`navbar-link ${selectedSection === section ? 'active' : ''}`}
          onClick={() => setSelectedSection(section)}
        >
          {section}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;