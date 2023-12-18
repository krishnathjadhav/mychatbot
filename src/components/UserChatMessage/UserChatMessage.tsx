import React from "react";

import { callIfExists } from "../Chat/chatUtils";

//import UserIcon from '../../assets/icons/user-alt.svg';

import "./UserChatMessage.css";
import { ICustomComponents } from "../../interfaces/IConfig";

interface IUserChatMessageProps {
  message: string;
  customComponents: ICustomComponents;
}

const UserChatMessage = ({
  message,
  customComponents,
}: IUserChatMessageProps) => {
  return (
    <div className="react-chatbot-kit-user-chat-message-container">
      {!!customComponents.userChatMessage ? (
        (customComponents.userChatMessage,
        {
          message,
        })
      ) : (
        <div className="react-chatbot-kit-user-chat-message">
          {message}
          <div className="react-chatbot-kit-user-chat-message-arrow"></div>
        </div>
      )}
      {!!customComponents.userAvatar ? (
        customComponents.userAvatar
      ) : (
        <div className="react-chatbot-kit-user-avatar">
          <div className="react-chatbot-kit-user-avatar-container">
            {/**--<UserIcon className="react-chatbot-kit-user-avatar-icon" />--**/}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserChatMessage;
