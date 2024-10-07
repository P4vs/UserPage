import React, { useState } from 'react';
import '../Css/Header.css'; 
import Logo from "../assets/bcas.png";

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [expandedMessageId, setExpandedMessageId] = useState(null);

  // Sample messages with content
  const [messages, setMessages] = useState([
    { id: 1, from: 'John Doe', time: '10:00 AM', content: 'Hello, how are you?', read: false },
    { id: 2, from: 'Jane Smith', time: '9:30 AM', content: 'Don’t forget the meeting at 3 PM.', read: true },
    { id: 3, from: 'Admin', time: 'Yesterday', content: 'Welcome to the system!', read: false },
  ]);

  // Calculate unread messages
  const unreadCount = messages.filter(message => !message.read).length;

  const toggleLogin = () => {
    setShowLogin((prev) => !prev);
  };

  const toggleMessages = () => {
    setShowMessages((prev) => !prev);
  };

  const toggleMessageDetail = (id) => {
    // Mark the message as read when clicked
    setMessages(prevMessages =>
      prevMessages.map(message =>
        message.id === id ? { ...message, read: true } : message
      )
    );
    setExpandedMessageId((prevId) => (prevId === id ? null : id));
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="header-text">
        <h1>Batangas College of Arts and Sciences</h1>
        <p>Brgy. Bagong Pook, Lipa City, Batangas</p>
        <p>www.bcas.edu.ph / sample email</p>
        <p>Telephone: 012-345-6789</p>
      </div>
      <div className='messaging' onClick={toggleMessages} style={{ position: 'relative' }}>
        <i className="bi bi-chat-dots-fill user-icon"></i>
        {unreadCount > 0 && (
          <span className="badge">{unreadCount}</span>
        )}
      </div>
      {
        showMessages && (
          <div className="my-messages">
            <p className='head-text'>Inbox</p>
            <div className="messages-list">
              {messages.map(message => (
                <div key={message.id} className="message-item" onClick={() => toggleMessageDetail(message.id)}>
                  <h4>{message.from}</h4>
                  {expandedMessageId === message.id && (
                    <>
                      <p>{message.content}</p>
                      <span className="message-time">{message.time}</span>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        )
      }
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



