import Image from "next/image";
import IconCancle from "../layout/Icon/IconCancle";
import IconLeft from "../layout/Icon/IconLeft";
import ChatBotImageIcon from "./../../../public/assets/chatbootIcon.png";

const ChatBotHeader = ({
  setChatBot,
  openChatBot,
}: {
  openChatBot: boolean;
  setChatBot: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      onClick={() => setChatBot((pre) => !pre)}
      className="flex items-center px-4 py-3 shadow-inner rounded-2xl cursor-pointer"
    >
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
        <p className="text-[#1E1E1E] font-bold text-[18px]">Slice Savvy </p>
        <span className="text-[#1E1E1E] font-bold text-[14px]">
          Food and entertainment
        </span>
      </div>

      {openChatBot && (
        <span
          onClick={(event) => {
            event.stopPropagation();
            setChatBot(false);
          }}
          className="flex-1 flex justify-end items-center z-10"
        >
          <IconCancle />
        </span>
      )}
    </div>
  );
};

export default ChatBotHeader;
