import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { openMenu, closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { addMessage } from "../utils/chatSlice";

const WatchPage = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const [liveMessage, setLiveMessage] = useState("");
    // console.log(searchParams);
    // console.log(searchParams.get("v"));
    // console.log(dispatch) ;

    useEffect(() => {
        dispatch(closeMenu());
        return (
            () => {
                dispatch(openMenu());
            }
        )
    }, [dispatch]);

    return (
        < >
            <div className="flex w-full">

                <div className="p-2 m-2 ">
                    <iframe
                        width="1000"
                        height="600"
                        src={"https://www.youtube.com/embed/" + searchParams.get("v") + "?si=AfYvmVLKfbubj-Mp"}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; 
            autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
                    ></iframe>

                    <CommentsContainer />
                </div>

                <form className="w-full"
                    onSubmit={(e) => {
                        e.preventDefault();
                        if (liveMessage.trim() !== "") {
                            dispatch(addMessage({
                                name: "Ravi Kumar Gupta",
                                message: liveMessage,
                            }));
                            setLiveMessage("");
                        }
                    }}
                >
                    <div className="bg-gray-100 h-[570px] w-full mt-4 mr-2 p-1 rounded-md shadow-lg border border-black overflow-y-scroll flex flex-col-reverse">
                        <LiveChat />
                    </div>
                    <div className="flex  mt-1 mr-2 p-1 w-full rounded-md shadow-lg  border border-black">
                        <input className="h-[30px] m-1 w-96 border border-gray-500 p-1 rounded-sm bg-gray-100"
                            type="text"
                            placeholder="Enter Text "
                            value={liveMessage}
                            onChange={(e) => { setLiveMessage(e.target.value) }}
                        />
                        <button className="p-0.5 h-[30px] m-0.5 w-16  border border-black bg-gray-200 hover:bg-gray-400 rounded-md">Send</button>
                    </div>
                </form>

            </div>
        </>
    )
}
export default WatchPage;