import React from 'react';
import { createChatBotMessage } from '../components/Chat/chatUtils';
const botName = "KK Bot";
const Configuration = {
    initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`, {})],
    botName,
   customComponents: {
       // Replaces the default header
      //header: () => <div style={{ backgroundColor: 'red', padding: "5px", borderRadius: "3px" }}>This is the header</div>
      // Replaces the default bot avatar
      //botAvatar: (props) => <MyAvatar {...props} />,
      // Replaces the default bot chat message container
      //botChatMessage: (props) => <MyCustomChatMessage {...props} />,
      // Replaces the default user icon
      //userAvatar: (props) => <MyCustomAvatar {...props} />,
      // Replaces the default user chat message
      //userChatMessage: (props) => <MyCustomUserChatMessage {...props} />
    },
  };

  export default Configuration;
