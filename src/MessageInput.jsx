import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MessageInput extends Component {
  
  state = {
    text: ''
  }

  isDisabled = () => {
    if(this.state.text)
      return false;
    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onAddMessage(this.state.text);
  }
  
  onMessageChange = event => {
    event.preventDefault();
    this.setState({text: event.target.value});
  }

  render() {
    return (
      <div>
        <form className="input-group" onSubmit={this.handleSubmit} >
          <input type="text" className="form-control" onChange={this.onMessageChange} placeholder="Enter your message..." />
          <div className="input-group-append">
            <button className="btn submit-button" disabled={this.isDisabled()}>
              SEND
            </button>
          </div>
        </form>
      </div>
    )
  };
}

MessageInput.propTypes = {
  onAddMessage : PropTypes.func.isRequired
}

export default MessageInput