/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useEffect, useState } from "react";
import ChatBotHeader from "../chatboot/ChatBotHeader";
import ChatBotTextArea from "../chatboot/ChatBotTextArea";
import ChatBotTextBody from "../chatboot/ChatBotTextBody";
import { Axios } from "../hooks/useAxios";
import { useProfile } from "../hooks/useProfile";
import { useConvertTimeFormatTime } from "../hooks/useConvertTimeFormatTime";
import { redirect, usePathname } from "next/navigation";

export type IChatBotMessage = {
  agent: "user" | "ai";
  time: string;
  text: string;
};

const Chatboot = () => {
  const [openChatBot, setChatBot] = useState<boolean>(false);
  const [userMessage, setUserMessage] = useState("");
  const { data: profileData } = useProfile();
  const pathName = usePathname();
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

  const handleSendMessage = async () => {
    if (userMessage.trim() === "") return;
    const userTextData: IChatBotMessage = {
      agent: "user",
      time: useConvertTimeFormatTime(new Date()),
      text: userMessage,
    };
    setChatbotMessage((prev) => [...prev, userTextData]);
    setUserMessage("");

    try {
      const response = await Axios.post("/chatbot/reply", {
        userId: profileData?._id,
        text: userTextData.text,
      });
      const chatbotRes = response.data.data as IChatBotMessage;
      setChatbotMessage((prev) => [...prev, chatbotRes]);
    } catch (error) {
      console.log(error);
      setChatbotMessage((prev) => [
        ...prev,
        {
          agent: "ai",
          time: useConvertTimeFormatTime(new Date()),
          text: "Sorry, Something went wrong!",
        },
      ]);
    }
  };
  if (pathName.includes("login") || pathName.includes("register")) {
    return <div></div>;
  }
  if (!profileData && openChatBot) {
    redirect("/login");
  }
  return (
    <div className="fixed bottom-16 right-14 z-[1000]">
      <div className=" bg-white w-[375px]">
        <ChatBotHeader setChatBot={setChatBot} openChatBot={openChatBot} />
        <ChatBotTextBody messaging={chatbotMessage} openChatBot={openChatBot} />
        {openChatBot && (
          <ChatBotTextArea
            handleSendMessage={handleSendMessage}
            // setMessages={setMessages}
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
