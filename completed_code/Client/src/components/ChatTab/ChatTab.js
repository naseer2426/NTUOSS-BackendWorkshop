import React from "react";

import "./styles.css";

class ChatTab extends React.Component {
  render() {
    return (
      <div
        className="chat-tab"
        onClick={() => this.props.onClick(this.props.name)}
      >
        <img
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="Avatar"
        />
        <div className="chat-tab-details">
          <h4>{this.props.name}</h4>
          <p>{this.props.latestMessage}</p>
        </div>
      </div>
    );
  }
}

export default ChatTab;
