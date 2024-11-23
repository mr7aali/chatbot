import { IChatBotMessage } from "../layout/Chatboot";
import IconPaperPnale from "../layout/Icon/IconPaperPnale";

const ChatBotTextArea = ({
  userMessage,
  setUserMessage,
  // setMessages,
  handleSendMessage,
  openChatBot,
}: {
  openChatBot: boolean;
  userMessage: string;
  // setMessages: React.Dispatch<React.SetStateAction<IChatBotMessage[]>>;
  setUserMessage: React.Dispatch<React.SetStateAction<string>>;
  handleSendMessage: () => void;
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault(); // Prevent form submit refresh
        handleSendMessage(); // Send message on form submit
      }}
      className={`flex items-center justify-between px-6 shadow-inner py-4`}
    >
      <textarea
        className="bg-white w-9/12  h-[60px] overflow-hidden py-2 text-black  placeholder:text-black  outline-none"
        name=""
        placeholder="Type your message..."
        value={userMessage}
        onChange={(e) => setUserMessage(e.target.value)}
        id=""
        rows={1}
      />
      <button type="submit" className="bg-white px-2 py-1 rounded-lg shadow-xl">
        <IconPaperPnale />
      </button>
    </form>
  );
};

export default ChatBotTextArea;
