import React from 'react'
import { ChatManager, TokenProvider } from '@pusher/chatkit-client'

export default class ChatScreen extends React.Component {
  componentDidMount = () => {
    const chatManager = new ChatManager({
      instanceLocator: 'v1:us1:4622d2e0-6748-447f-929a-2d0cf5963190',
      userId: this.props.currentUsername,
      tokenProvider: new TokenProvider({
        url: 'http://localhost:3001/authenticate'
      })
    })
    chatManager
    .connect()
    .then(currentUser => console.log('currentUser', currentUser))
    .catch(error => console.error(error))
    

  }
  render(){
    return (
        <div>
          <h1>Chat</h1>
        </div>
    )
  }
}
