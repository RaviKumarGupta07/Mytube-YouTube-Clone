const ChatMessage = ({name , message}) =>{

    return(
        <div className="flex  bg-gray-200 border border-b-gray-300">
            <img className="p-1 rounded-md w-7 h-7"
            alt="user" src="https://cdn-icons-png.flaticon.com/512/709/709699.png"/>
            <div className="font-semibold ml-2 mr-2">{name}: </div>
            <div>{message}</div>
        </div>
    )
}

export default ChatMessage ;