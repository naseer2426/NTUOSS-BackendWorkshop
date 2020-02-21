import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Navbar from "./components/Navbar/Navbar";
import ChatList from "./components/ChatList/ChatList";
import ChatColumn from "./components/ChatColumn/ChatColumn";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chatName: ""
    };
  }

  handleChatClick = newChatName => {
    this.setState({
      chatName: newChatName
    });
  };

  render() {
    return (
      <div className="container">
        <Navbar chatName={this.state.chatName} />
        <div className="content">
          <ChatList onChatSelect={this.handleChatClick} />
          <ChatColumn />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
