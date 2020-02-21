import React from "react";

import "./styles.css";
import TextBox from "../TextBox/TextBox";
import ChatStream from "../ChatStream/ChatStream";
import io from "socket.io-client";
import { BoxLoading } from "react-loadingg";

class ChatColumn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            messages: [],
            loading: false
        };
    }

    componentDidMount() {
        //Nothing as of now
        var myName = prompt("What is your name");
        this.setState({ name: myName });
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSendMessage = () => {
        var newMessage = {
            body: this.state.message,
            name: this.state.name
        };
        this.setState(prevState => ({
            messages: [...prevState.messages, newMessage],
            message: ""
        }));
    };

    loader = () => {
        if (this.state.loading) {
            return (
                <div>
                    <h2>Loading...</h2>
                </div>
            );
        } else {
            return [
                <ChatStream messages={this.state.messages} />,
                <TextBox
                    message={this.state.message}
                    onChange={this.handleChange}
                    onSubmit={this.handleSendMessage}
                />
            ];
        }
    };

    render() {
        return <div className="chat-area">{this.loader()}</div>;
    }
}

export default ChatColumn;
