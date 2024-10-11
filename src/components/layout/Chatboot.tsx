"use client";
import React, { useState } from "react";
import IconMessenge from "./Icon/IconMessenge";
import IconLeft from "./Icon/IconLeft";
import ChatBotImageIcon from "./../../../public/assets/chatbootIcon.png";
import Image from "next/image";
import IconCancle from "./Icon/IconCancle";
import IconPaperPnale from "./Icon/IconPaperPnale";

const Chatboot = () => {
  const [openChatBot, setChatBot] = useState<boolean>(false);
  return (
    <div className="fixed bottom-16 right-14 z-[1000]">
      {openChatBot && (
        <div className=" bg-white w-[375px]">
          {/* header */}
          <div className="flex items-center p-6 shadow-inner">
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
              <p className="text-[#1E1E1E] font-bold text-[18px]">
                Legend - Restaurant{" "}
              </p>
              <span className="text-[#1E1E1E] font-bold text-[14px]">
                Food and entertainment
              </span>
            </div>
            <span onClick={() => setChatBot((pre) => !pre)} className="pl-5">
              {" "}
              <IconCancle />
            </span>
          </div>
          {/* body of chatboot */}
          <div className="px-6 py-2 bg-[#F4F4F4] h-96 overflow-auto">
            {/* texting container */}
            {messaging.map((Item, i) => (
              <div
                key={i}
                className={`flex mt-2 ${
                  Item.agent === "ai" ? "justify-start" : "justify-end"
                }`}
              >
                <div>
                  <div
                    className={`bg-[#dbcdcd] w-[242px] rounded-xl ${
                      Item.agent === "ai"
                        ? "rounded-bl-none"
                        : "rounded-br-none"
                    } py-4 px-6`}
                  >
                    <span className="text-black text-[14px]">{Item.text}</span>
                  </div>
                  <span className="text-[#1E1E1E] py-1 text-xs">
                    {Item.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
          {/* footer*/}
          <form className="flex items-center justify-between px-6 shadow-inner">
            <textarea
              className="bg-white w-9/12 h-[64px] overflow-hidden py-2 text-black  placeholder:text-black  outline-none"
              name=""
              placeholder="Type your message..."
              id=""
              rows={1}
            />
            <IconPaperPnale />
          </form>
        </div>
      )}

      {!openChatBot && (
        <div
          onClick={() => setChatBot((pre) => !pre)}
          className="flex justify-between drop-shadow-2xl"
        >
          <div></div>
          <IconMessenge />
        </div>
      )}
    </div>
  );
};

export default Chatboot;

const messaging: { agent: "user" | "ai"; time: string; text: string }[] = [
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
