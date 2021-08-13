import React from 'react';
import {BsArrowRight} from 'react-icons/bs';
import  './chattSend.css'

function ChattSend() {
  return (
   <div className="sendMessage">
     <input type="text" placeholder="escreva a mensagem" />

      <BsArrowRight className="arrow"/>
   </div>
  );
}

export default ChattSend;