import React,{Component} from 'react'
import MessageInput from './MessageInput.jsx'
import MessageList from './MessageList.jsx'
import PropTypes from 'prop-types'

class ChatScreen extends Component {
  
  state = {
    messages: []
  };

  handleAddMessage = text => {
    const message = { username: this.props.users[0].username, text : text}
    this.setState(prevState=> ({ messages: [...prevState.messages, message ]}))
  };

handleAddMessageSecond = text => {
    const message = { username: this.props.users[1].username, text : text}
    this.setState(prevState=> ({ messages: [...prevState.messages, message ]}))
  };
  
  render () {

    return (
      <div className="container">
        <div className="chat-window">
          <h2>Super Awesome Chat</h2>
          <div className="name sender">{this.props.users[0].username}</div>

          <MessageList messages={this.state.messages} username={this.props.users[0].username} />
          <MessageInput onAddMessage={this.handleAddMessage}/>
        </div>
        <div className="chat-window">
          <h2>Super Awesome Chat</h2>
          <div className="name sender">{this.props.users[1].username}</div>
          <MessageList messages={this.state.messages} username={this.props.users[1].username} />
          <MessageInput onAddMessage={this.handleAddMessageSecond}/>
        </div>
      </div>      
    )
  }
}

ChatScreen.propTypes = {
  users: PropTypes.array.isRequired
}

export default ChatScreen