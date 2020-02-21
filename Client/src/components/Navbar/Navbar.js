import React from "react";

import "./styles.css";

class Navbar extends React.Component {
  render() {
    return (
      <header className="navbar">
        <div className="app-name">Telegram</div>
        <div className="chat-name">
          <strong>{this.props.chatName}</strong>
        </div>
      </header>
    );
  }
}

export default Navbar;
