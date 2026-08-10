import Button from "./Button";

const ButtonList = () => {
    const btnList = ["All",
        "Music",
        "Mixes",
        "Recruitment",
        "Shreya Ghoshal",
        "News",
        "Indian pop music",
        "JavaScript",
        "Podcasts",
        "Data Structures",
        "3D audio effects",
       ] ;

    return (
        <div className="flex">
            {btnList.map((btn,index)=><Button key={index} name={btn}/>)}
        </div>
    )
}
export default ButtonList;