import React from 'react';

const Header = ({ activeSection, onNavigate }) => {
  return (
    <header className="header">
      <nav className="navbar">
        <button
          className={`nav-link ${activeSection === 'landing' ? 'active' : ''}`}
          onClick={() => onNavigate('landing')}
        >
          Home
        </button>
        <button
          className={`nav-link ${activeSection === 'owner' ? 'active' : ''}`}
          onClick={() => onNavigate('owner')}
        >
          Owner
        </button>
      </nav>
    </header>
  );
};

export default Header;
