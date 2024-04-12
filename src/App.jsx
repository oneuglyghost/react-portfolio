import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [selectedSection, setSelectedSection] = useState('AboutMe');

  return (
    <div>
      <Header />
      <Navbar selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
      {selectedSection === 'AboutMe' && <AboutMe />}
      {selectedSection === 'Portfolio' && <Portfolio />}
      {selectedSection === 'Contact' && <Contact />}
      {selectedSection === 'Resume' && <Resume />}
    </div>
  );
}

export default App;