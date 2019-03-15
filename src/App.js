import React, { Component } from 'react';
import './App.css';
import ChatScreen from './ChatScreen.jsx'

const users = [{ username: 'Amy' }, { username: 'John' }];

class App extends Component {

handleAddMessage = text => {
  let message = {username: this.props.username, text: text}
  this.setState( prevState => ({messages: [...prevState.messages, message ]}))
};

render() {
  return (
  <div className="App">
      <ChatScreen users={users} />
  </div>
);
}
}

export default App;
