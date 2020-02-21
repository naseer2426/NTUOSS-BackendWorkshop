import React from "react";

import "./styles.css";

class TextBox extends React.Component {
  render() {
    return (
      <div className="text-box">
        <textarea
          value={this.props.message}
          onChange={this.props.onChange}
          placeholder="Write a message..."
          rows="3"
          name="message"
        />
        <button onClick={this.props.onSubmit}>SEND</button>
      </div>
    );
  }
}

export default TextBox;
