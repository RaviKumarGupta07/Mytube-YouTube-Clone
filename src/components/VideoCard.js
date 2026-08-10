

const VideoCard = ({ info }) => {

    const { statistics, snippet } = info;
    const { channelTitle, thumbnails, title } = snippet;
    const { viewCount } = statistics;
    // console.log(info);

    return (
        <div
        className="m-2 p-2 border border-gray-50 shadow-lg w-80"
        >
            <img 
            className="shadow-lg rounded-lg"
            alt="thumbnail" src={thumbnails.medium.url}/>
            <ul>
                <li className="font-bold">{title}</li>
                <li>{channelTitle}</li>
                <li>{viewCount} views</li>
            </ul>
        </div>
    )
}

export default VideoCard;