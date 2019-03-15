import React, {Component} from 'react'
import PropTypes from 'prop-types'

class MessageList extends Component {
  render () {
    const { username, messages } = this.props;
    
    return (
      <ul className="message-list">
        {messages.map((message, index) => (
          <li
            key={index}
            className={
              message.username === username ? 'message sender' : 'message recipient'
            }
            >
            <p>{`${message.username}: ${message.text}`}</p>
          </li>
        ))}
      </ul>
    )
  }
}

MessageList.propTypes = {
  username: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired
}

export default MessageList