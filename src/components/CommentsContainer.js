import Comment from "./Comment";

const commentsData = [
    {
        name: "Rahul",
        comment: "Amazing",
        replies: [
            {
                name: "Sachin",
                comment: "Why are you saying this ? ",
                replies: [
                    {
                        name: "Raman",
                        comment: "Dont fight guys !!",
                        replies: [
                            {
                                name: "Raman",
                                comment: "Dont fight guys !!",
                                replies: []
                            },
                        ]
                    }
                ]
            },
            {
                name: "Raman",
                comment: "Dont fight guys !!",
                replies: []
            },
        ]
    },
    {
        name: "Raman",
        comment: "Dont fight guys !!",
        replies: [

            {
                name: "Raman",
                comment: "Dont fight guys !!",
                replies: []

            },
            {
                name: "Raman",
                comment: "Dont fight guys !!",
                replies: []
            },
        ]
    },
    {
        name: "Raman",
        comment: "Dont fight guys !!",
        replies: []
    },
    {
        name: "Raman",
        comment: "Dont fight guys !!",
        replies: []
    },
    {
        name: "Raman",
        comment: "Dont fight guys !!",
        replies: []
    },
    {
        name: "Raman",
        comment: "Dont fight guys !!",
        replies: []
    },
]

const CommentsList = ({ comments }) => {
    return comments.map((comment, index) =>
        <div key={index}>
            <Comment info={comment} />
            <div className="pl-2 ml-2 border-l-2 ">
                <CommentsList comments={comment.replies} />
            </div>
        </div>
    )
}

const CommentsContainer = () => {
    return (
        <div className="p-2 m-2">
            <h1 className="text-2xl font-bold ">Comments : </h1>
            <div>
                <CommentsList comments={commentsData} />
            </div>
        </div>
    )
}

export default CommentsContainer;