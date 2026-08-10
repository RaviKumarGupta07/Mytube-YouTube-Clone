
const Comment = ({info}) => {
  // console.log(info);
  const {name , comment } = info ;
  // console.log(replies);
  return (
    <div className="flex bg-gray-100 shadow-sm m-1 rounded-lg">
      <img
        className="w-10  m-2"
        alt="user"
        src="	https://cdn-icons-png.flaticon.com/512/709/709699.png"
      />

      <div className="">
        <div className="font-semibold ">{name}</div>
        <div>{comment}</div>
      </div>
    </div>
  );
};

export default Comment;