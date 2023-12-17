import React from "react";
import "./chatbotbutton.scss";
const ChatBotButton = (props: any) => {
  const { onHelpClick } = props;
  return (
    <div className="bottom-0 right-3 d-flex position-fixed">
      <button
        className="btn   btn-primary bg-blue glyph-prepend glyph-prepend-chat-bubbles rounded-xl border-bottom-radius-0"
        data-oc-chat=""
        aria-label="Chat with sales"
        data-bi-chtnm="live person chat"
        data-bi-an="chat"
        data-bi-bhvr="180"
        data-bi-id="expand-chat"
        data-bi-cn="ContactSales_Chat_Widget"
        data-bi-chtid="azure chat 1"
        onClick={() => {
          onHelpClick(true);
        }}
      >
        May I help you
      </button>
    </div>
  );
};

export default ChatBotButton;
