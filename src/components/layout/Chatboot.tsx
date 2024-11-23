/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useEffect, useState } from "react";
import ChatBotHeader from "../chatboot/ChatBotHeader";
import ChatBotTextArea from "../chatboot/ChatBotTextArea";
import ChatBotTextBody from "../chatboot/ChatBotTextBody";
import { Axios } from "../hooks/useAxios";
import { useProfile } from "../hooks/useProfile";
import { useConvertTimeFormatTime } from "../hooks/useConvertTimeFormatTime";

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
    {
      agent: "ai",
      text: "Hi, How can i help you?",
      time: useConvertTimeFormatTime(new Date()),
    },
  ]);

  useEffect(() => {
    const chatBot = profileData?.ChatingWithSystem as IChatBotMessage[];
    if (chatBot?.length > 0) {
      setChatbotMessage(chatBot);
    }
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
    const userTextData: IChatBotMessage = {
      agent: "user",
      time: useConvertTimeFormatTime(new Date()),
      text: userMessage,
    };

    const newMessages: IChatBotMessage[] = [
      ...messages,
      {
        agent: "user",
        text: userMessage,
        time: useConvertTimeFormatTime(new Date()),
      },
    ];
    // setChatbotMessage(newMessages);
    // setChatbotMessage((prev): IChatBotMessage[] => prev.push(userTextData));
    setChatbotMessage((prev) => [...prev, userTextData]);

    // setMessages((pre) => pre.push({ agent: "ai", text: "d", time: "d" }));

    // try {
    //   const response = await Axios.post("/api/chatbot", {
    //     message: userMessage,
    //   });
    //   setMessages([
    //     ...newMessages,
    //     {
    //       agent: "ai",
    //       text: response.data.reply,
    //       time: useConvertTimeFormatTime(new Date()),
    //     },
    //   ]);
    // } catch (error) {
    //   console.error("Error sending message:", error);
    // }

    setUserMessage("");
  };

  return (
    <div className="fixed bottom-16 right-14 z-[1000]">
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
    </div>
  );
};

export default Chatboot;
