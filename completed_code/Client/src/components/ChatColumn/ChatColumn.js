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
            loading: true
        };
        this.server = "https://telegram-backend.herokuapp.com";

        this.socket = io(this.server);
    }

    componentDidMount() {
        fetch(this.server)
            .then(res => res.json())
            .then(
                result => {
                    // console.log(result.slice(0, 10));
                    this.setState({
                        messages: result,
                        loading: false
                    });
                },
                error => {
                    console.log(error);
                }
            );
        this.socket.on("recieving", data => {
            this.setState(prevState => ({
                messages: [...prevState.messages, data]
            }));
        });
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
        this.socket.emit("send", newMessage);

        fetch(this.server + "/send", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMessage)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            });
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
