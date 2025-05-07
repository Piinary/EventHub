import { useRef } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import { Ellipsis } from "lucide-react";

function Messages() {
  const userInputRef = useRef<HTMLInputElement>(null);
  const chatBoxRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const input = userInputRef.current;
      const chatBox = chatBoxRef.current;
      if (!input || !chatBox) return;

      const messageText = input.value.trim();
      if (messageText === "") return;

      const userMessage = document.createElement("div");
      userMessage.textContent = messageText;
      userMessage.className =
        "self-end text-white px-2 py-1 m-3 w-fit max-w-[70%] rounded-lg bg-gradient-to-l from-[var(--primary-gradient-1)] to-[var(--primary-gradient-2)] break-words whitespace-pre-wrap";

      chatBox.appendChild(userMessage);
      input.value = "";

      setTimeout(() => {
        const chatbotResponse = document.createElement("div");
        chatbotResponse.textContent = "Oke nhé!";
        chatbotResponse.className =
          "text-left px-2 py-1 m-3 w-fit max-w-[70%] rounded-lg bg-gray-100 break-words whitespace-pre-wrap";

        chatBox.appendChild(chatbotResponse);
        chatBox.scrollTo({ top: chatBox.scrollHeight, behavior: "smooth" });
      }, 1000);
    }
  };

  return (
    <DefaultLayout>
      <div className="flex w-full h-[96vh] my-3 bg-white rounded-[20px]">
        {/* left menu */}
        <div className="flex flex-col gap-3 border-r border-[var(--neutral)] p-3">
          <div>
            <input
              type="text"
              placeholder="Your friend name"
              className="bg-white h-10 w-[276px] rounded-lg border border-[var(--neutral)] px-2 cursor-pointer"
            />
          </div>
          <div className="flex flex-col gap-3 overflow-auto">
            {/* friend items */}
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="flex items-center text-left gap-2 cursor-pointer"
              >
                <img
                  className="w-9 h-9 rounded-full"
                  src="src/assets/avt.png"
                  alt="avt"
                />
                <span>
                  <div className="font-bold text-lg">Kim Tien Nguyen</div>
                  <div className="text-xs text-gray">Hello, how are you?</div>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* chat box */}
        <div className="flex-1 flex flex-col">
          <div className="p-3 h-[70px] w-full flex gap-3 items-center border-b border-[--var(neutral)]">
            <img
              className="w-9 h-9 rounded-full"
              src="src/assets/avt.png"
              alt="avt"
            />
            <span className="font-bold text-lg flex-1 text-left">
              Kim Tien Nguyen
            </span>
            <Ellipsis size={24} />
          </div>

          {/* content */}
          <div
            id="chat-box"
            ref={chatBoxRef}
            className="flex-1 flex flex-col overflow-auto"
          ></div>

          {/* input */}
          <div className="p-3">
            <input
              ref={userInputRef}
              type="text"
              placeholder="Typing your message..."
              onKeyDown={handleKeyDown}
              className="bg-white h-10 w-full rounded-lg border border-[var(--neutral)] px-2 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Messages;
