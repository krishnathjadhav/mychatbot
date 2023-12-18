import React from "react";
import Configuration from "./Configuration";
import { getInitialState } from "../components/Chatbot/utils";
import Chatbot from "../components/Chatbot/Chatbot";
import { createChatBotMessage } from "../components/Chat/chatUtils";
import "./mychatbot.scss";
import ChatBotButton from "./ChatBotButton";
const initialState = getInitialState(Configuration);
const MyChatBot = () => {
  const [state, setState] = React.useState({
    messages: [...Configuration.initialMessages],
    ...initialState,
  });
  const [activeChatBot, setActiveChatBot] = React.useState(false);

  const saveMessages = (ref: any, hmtl: string) => {};
  const onHelpClick = (val: boolean) => {
    setActiveChatBot(val);
  };
  const parse = (message: string) => {
    setState((prev) => {
      return {
        messages: [
          ...prev.messages,
          createChatBotMessage("KK See:" + message, {}),
        ],
      };
    });
  };
  return (
    <div>
      {activeChatBot ? (
        <div className="modal-chat">
          <div className="lp_header lpc_maximized-header lpc_desktop">
            <div className="lp_header-content-wrapper">
              <button
                title="Open widgets"
                className="lp_hidden lp_slider lpc_maximized-header__slider-button lpc_desktop"
                data-lp-point="widget_sdk"
                onClick={() => {
                  onHelpClick(false);
                }}
              >
                <span
                  className="lp-slider-icon lp_icon-white"
                  data-lp-type="icon"
                >
                  Close it
                </span>
              </button>
            </div>
          </div>
          <Chatbot
            state={state}
            setState={setState}
            config={Configuration}
            parse={parse}
            saveMessages={saveMessages}
          />
        </div>
      ) : (
        <ChatBotButton onHelpClick={onHelpClick} />
      )}
    </div>
  );
};

export default MyChatBot;
