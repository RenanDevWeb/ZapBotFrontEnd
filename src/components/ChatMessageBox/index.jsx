import React from 'react';

import './chatMessageBox.css'
function ChatMessageBox() {
  return (
<>
  <div className="boxMessage">
     <div className="boxtitle">
      <h2>Name</h2>
      <h4>date</h4>
     </div>
      <p>Previous message</p>
 </div>
</>
  );
}

export default ChatMessageBox;