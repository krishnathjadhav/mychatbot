import React, { useEffect } from "react";

import Chat from "../Chat/Chat";

import ChatbotError from "../ChatbotError/ChatbotError";

import IConfig from "../../interfaces/IConfig";

import {
  getCustomStyles,
  getCustomComponents,
  getBotName,
  getCustomMessages,
  isConstructor,
  getInitialState,
  getWidgets,
} from "./utils";

import { IMessage } from "../../interfaces/IMessages";
import { createChatBotMessage } from "../Chat/chatUtils";
import WidgetRegistry from "../WidgetRegistry/WidgetRegistry";
import IWidget from "../../interfaces/IWidget";

interface IChatbotProps {
  state: any;
  setState: any;
  actionProvider?: any;
  messageParser?: any;
  config: IConfig;
  headerText?: string;
  placeholderText?: string;
  saveMessages: (ref: any, hmtl: string) => any;
  messageHistory?: IMessage[] | string;
  validator?: (input: string) => Boolean;
  runInitialMessagesWithHistory?: Boolean;
  disableScrollToBottom?: boolean;
  parse: any;
}

const Chatbot = ({
  state,
  setState,
  config,
  saveMessages,
  parse,
  ...rest
}: IChatbotProps) => {
  const messagesRef = React.useRef(state.messages);
  const messageContainerRef: React.MutableRefObject<HTMLDivElement> =
    React.useRef(null);
    useEffect(() => {
      messagesRef.current = state.messages;
    });
  
    useEffect(() => {
      const refValue: HTMLDivElement = messageContainerRef.current;
  
      return () => {
        if (saveMessages && typeof saveMessages === "function") {
          const HTML = refValue.innerHTML.toString();
  
          saveMessages(messagesRef.current, HTML);
        }
      };
    }, []);
  const customComponents = getCustomComponents(config);
  const botName = getBotName(config);
  

  
  

  
  let widgets;
  let widgetRegistry: WidgetRegistry;
  widgetRegistry = new WidgetRegistry(setState, null);

  widgets = getWidgets(config);
  widgets.forEach((widget: IWidget) => widgetRegistry?.addWidget(widget, rest));
  /**
   * 
   * state,
  setState,
  widgetRegistry,
  parse,
  customComponents,
  botName,
  customStyles,
  headerText,
  placeholderText,
  disableScrollToBottom,
  messageContainerRef,
   * 
   * 
   */

  return (
    <Chat
      state={state}
      setState={setState}
      widgetRegistry={widgetRegistry}
      customComponents={{ ...customComponents }}
      botName={botName}
      headerText={"Hi KK"}
      placeholderText={"Ask me anything"}
      disableScrollToBottom={false}
      messageContainerRef={messageContainerRef}
      parse={parse}
    />
  );
};

export default Chatbot;
