import React from "react";

import "./styles.css";

class Message extends React.Component {
  render() {
    return (
      <div className="message">
        <img
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="Avatar"
        />
        <div className="message-content">
          <h4>{this.props.user}</h4>
          <p>{this.props.message}</p>
        </div>
      </div>
    );
  }
}

export default Message;
