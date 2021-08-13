import React from 'react';
import ChatMessageBox from '../ChatMessageBox';
import './chatmesage.css'


function ChatMensage() {
  return (
    <div className="ContainerChat">
        <div className="ContainerTitle">
            <h3>Chats</h3>
        </div>

        <div className="containerMenssages">
          <ChatMessageBox />
          <ChatMessageBox />
          <ChatMessageBox />
          <ChatMessageBox />
          <ChatMessageBox />
          <ChatMessageBox />
          <ChatMessageBox />
          <ChatMessageBox />
          <ChatMessageBox />
          <ChatMessageBox />
          <ChatMessageBox />
        </div>
    </div>
  );
}

export default ChatMensage;