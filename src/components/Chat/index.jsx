import React from 'react';
import BoxIcons from '../BoxIcons/index'
import Chatt from '../Chatt/index'
import ChattSend from '../ChattSend/index'

import './chat.css'

function Chat() {
  return (


    <div className="ContainerChat">
       <div className="boxInformations">
         <div className="boxInformationsIcons">
             <BoxIcons />
         </div>
         <div className="containerChatConversation">
            <Chatt />
         </div>
         <div className="containerChatConversation">
            <ChattSend />
         </div>
       </div>
    </div>
  );
}

export default Chat;