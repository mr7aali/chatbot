import Image from "next/image";
import IconCancle from "../layout/Icon/IconCancle";
import IconLeft from "../layout/Icon/IconLeft";
import ChatBotImageIcon from "./../../../public/assets/chatbootIcon.png";
import { useState } from "react";

const ChatBotHeader = ({
  setChatBot,
}: {
  setChatBot: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
 
  return (
    <div className="flex items-center p-6 shadow-inner ">
      <IconLeft />
      <div>
        <Image
          src={ChatBotImageIcon}
          height={42}
          width={42}
          alt="Chatbot icon"
        />
      </div>
      <div className="pl-3">
        <p className="text-[#1E1E1E] font-bold text-[18px]">Pizza Fiesta </p>
        <span className="text-[#1E1E1E] font-bold text-[14px]">
          Food and entertainment
        </span>
      </div>

      <span
        onClick={() => setChatBot((pre) => !pre)}
        className="flex-1 flex justify-end items-center"
      >
        <IconCancle />
      </span>
    </div>
  );
};

export default ChatBotHeader;
