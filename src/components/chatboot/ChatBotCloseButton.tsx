import IconMessenge from "../layout/Icon/IconMessenge";

const ChatBotCloseButton = ({
  setChatBot,
}: {
  setChatBot: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      onClick={() => setChatBot((pre) => !pre)}
      className="flex justify-between drop-shadow-2xl"
    >
      <div></div>
      <IconMessenge />
    </div>
  );
};

export default ChatBotCloseButton;
