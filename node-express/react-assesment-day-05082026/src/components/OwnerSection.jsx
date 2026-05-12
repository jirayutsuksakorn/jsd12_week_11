import React from 'react';
import profileIMG from '../img/card.JPG';

const OwnerSection = () => {
  return (
    <div className="section owner-section">
      <div className="owner-card">
        <h2>09_Jirayut (Card/การ์ด)</h2>
        <div className="owner-picture">
          <img
            src={profileIMG}
            alt="Profile"
            className="profile-image"
          />
        </div>
        <h3>Short Biography:</h3>
        <p className="biography">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default OwnerSection;
