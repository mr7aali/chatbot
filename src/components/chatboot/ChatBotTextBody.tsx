"use client";
import { useEffect, useRef } from "react";

const ChatBotTextBody = ({
  messaging,
  openChatBot,
}: {
  messaging: { agent: "user" | "ai"; time: string; text: string }[];
  openChatBot: boolean;
}) => {
  const chatBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messaging]);

  return (
    <div
      ref={chatBodyRef}
      className={`px-6 py-2 bg-[#F4F4F4]  overflow-auto ${
        openChatBot ? "expandable-content" : "closing-content"
      }`}
    >
      {messaging?.map((Item, i) => (
        <div
          key={i}
          className={`flex mt-2 ${
            Item.agent === "ai" ? "justify-start" : "justify-end"
          }`}
        >
          <div>
            <div
              className={`bg-[#dbcdcd] w-[242px] rounded-xl ${
                Item.agent === "ai" ? "rounded-bl-none" : "rounded-br-none"
              } py-4 px-6`}
            >
              <span className="text-black text-[14px]">{Item.text}</span>
            </div>
            <span className="text-[#1E1E1E] py-1 text-xs">{Item.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatBotTextBody;
