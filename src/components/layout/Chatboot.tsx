"use client";
import React, { useEffect, useState } from "react";
import ChatBotHeader from "../chatboot/ChatBotHeader";
import ChatBotTextBody from "../chatboot/ChatBotTextBody";
import ChatBotCloseButton from "../chatboot/ChatBotCloseButton";
import ChatBotTextArea from "../chatboot/ChatBotTextArea";
import { Axios } from "../hooks/useAxios";
import { useProfile } from "../hooks/useProfile";
// import HttpService from "../hooks/useAxios";
export type IChatBotMessage = {
  agent: "user" | "ai";
  time: string;
  text: string;
};

const Chatboot = () => {
  const [openChatBot, setChatBot] = useState<boolean>(false);
  const [messages, setMessages] = useState<IChatBotMessage[]>([]);
  const [userMessage, setUserMessage] = useState("");
  const { data: profileData } = useProfile();
  const [chatbotMessage, setChatbotMessage] = useState<IChatBotMessage[]>([
    { agent: "ai", text: "This is text message", time: "1:20 AM" },
  ]);
  // console.log(chatbotMessage);

  useEffect(() => {
    const chatBot = profileData?.ChatingWithSystem as IChatBotMessage[];
    setChatbotMessage(chatBot);
  }, [profileData?.ChatingWithSystem]);
  // useEffect(() => {
  //   const fetchChatbotMessages = async () => {
  //     const data = {
  //       userId: "673e44badf665e9f2524129a",
  //       text: "Hi, how are you",
  //     };
  //     try {
  //       const response = await Axios.post("/chatbot/reply", data);
  //       console.log(response.data);
  //       setChatbotMessage(response.data);
  //     } catch (error) {
  //       console.error("Error fetching chatbot messages:", error);
  //     }
  //   };
  //   fetchChatbotMessages();
  // }, []);

  const handleSendMessage = async () => {
    if (userMessage.trim() === "") return;

    const newMessages: IChatBotMessage[] = [
      ...messages,
      {
        agent: "user",
        time: new Date().toLocaleTimeString(),
        text: userMessage,
      },
    ];
    setMessages(newMessages);

    try {
      const response = await Axios.post("/api/chatbot", {
        message: userMessage,
      });
      setMessages([
        ...newMessages,
        {
          agent: "ai",
          time: new Date().toLocaleTimeString(),
          text: response.data.reply,
        },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
    }

    setUserMessage(""); // Clear the input field
  };

  return (
    <div className="fixed bottom-16 right-14 z-[1000]">
      {/* {openChatBot && ( */}
      <div className=" bg-white w-[375px]">
        <ChatBotHeader setChatBot={setChatBot} openChatBot={openChatBot} />

        <ChatBotTextBody messaging={chatbotMessage} openChatBot={openChatBot} />

        {openChatBot && (
          <ChatBotTextArea
            handleSendMessage={handleSendMessage}
            setMessages={setMessages}
            userMessage={userMessage}
            setUserMessage={setUserMessage}
            openChatBot={openChatBot}
          />
        )}
      </div>
      {/* // )} */}

      {/* {!openChatBot && <ChatBotCloseButton setChatBot={setChatBot} />} */}
    </div>
  );
};

export default Chatboot;

const messaging: IChatBotMessage[] = [
  {
    agent: "ai",
    time: "02:58 PM",
    text: "Hi! Thanks for reaching out. What can I get for you?",
  },
  {
    agent: "user",
    time: "02:58 PM",
    text: "Hi! Thanks for reaching out. What can I get for you?",
  },
  {
    agent: "user",
    time: "02:58 PM",
    text: "Hi! Thanks for reaching out. What can I get for you?",
  },
  {
    agent: "user",
    time: "02:58 PM",
    text: "Hi! Thanks for reaching out. What can I get for you?",
  },
  {
    agent: "user",
    time: "02:58 PM",
    text: "Hi! Thanks for reaching out. What can I get for you?",
  },
  {
    agent: "ai",
    time: "02:58 PM",
    text: "Hi! Thanks for reaching out. What can I get for you?",
  },
];
