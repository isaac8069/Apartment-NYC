import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import Messages from './Messages'
import MessageInput from './MessageInput'
import apiUrl from '../../../apiConfig'



const Inbox = () => {
  const [socket, setSocket] = useState(null)

  useEffect(() => {
    const newSocket = io('http://localhost:8000/messages')
    setSocket(newSocket)
    return () => newSocket.close()
  }, [setSocket])

  return (
    <div className="App">
      <header className="app-header">
        Apartment NYC Chat
      </header>
      { socket ? (
        <div className="chat-container">
          <Messages socket={socket} />
          <MessageInput socket={socket} />
        </div>
      ) : (
        <div>Not Connected</div>
      )}
    </div>
  )
}

export default Inbox