import React, {useState} from 'react';
import '../Css/Header.css'; // Make sure to create this CSS file
import Logo from "../assets/bcas.png";


const Header = () => {
  const [showLogin, setShowLogin] = useState(false);

    const toggleLogin = () => {
        setShowLogin((prev) => !prev);
    };

    return (
      <header className="header">
      <div className="logo">
          <img src={Logo} alt="Logo" />
      </div>
      <div className="header-text">
          <h1>Batangas College of Arts and Sciences</h1>
          <p>Brgy. Bagong Pook, Lipa City ,Batangas</p>
          <p>www.bcas.edu.ph / sample email</p>
          <p>Telephone: 012-345-6789</p>
      </div>
      <div className="login" onClick={toggleLogin}>
          <i className="bi bi-person-circle user-icon"></i>
      </div>
      {showLogin && (
          <div className="login-dropdown">
              <button className="login-button">Logout</button>
          </div>
      )}
  </header>
    );
};

export default Header;
