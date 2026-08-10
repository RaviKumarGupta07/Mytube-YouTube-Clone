import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { useEffect } from "react";
import { addMessage } from "../utils/chatSlice";
import { randomNameGenerate, randomTextGenerater } from "../utils/helper";

const LiveChat = () => {
    const chatList = useSelector((store) => store.chat.messages);
    const dispatch = useDispatch();



    useEffect(() => {
        const i = setInterval(() => {
            console.log("Api polling");
            dispatch(addMessage({
                name: randomNameGenerate(),
                message: randomTextGenerater(20) + "🚀",
            }))
        }, 2000);

        return () => clearTimeout(i);
    }, [])

    return (
            <div>
                {chatList.map((chat, index) =>
                    <ChatMessage name={chat.name} message={chat.message} key={index} />
                )}
            </div>
    )
}

export default LiveChat;