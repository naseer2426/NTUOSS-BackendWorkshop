import React from "react";

import "./styles.css";
import Message from "../Message/Message";

class ChatStream extends React.Component {
    render() {
        return (
            <div className="chat-stream">
                <div className="chat-stream-content" id="chatStream">
                    {this.props.messages.map(message => (
                        <Message message={message.body} user={message.name} />
                    ))}
                </div>
            </div>
        );
    }
}

export default ChatStream;
